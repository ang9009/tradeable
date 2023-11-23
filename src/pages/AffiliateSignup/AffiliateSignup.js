import { createUserWithEmailAndPassword } from "firebase/auth";
import { increment } from "firebase/firestore";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import TextInput from "../../components/form/TextInput/TextInput";
import Button from "../../components/ui/Button/Button";
import Error from "../../components/ui/Error/Error";
import { sendVerifyEmail } from "../../features/auth";
import pdf from "../../files/terms.pdf";
import { auth, db, doc, setDoc, updateDoc } from "../../lib/firebase";
import AffiliateSignupCSS from "./AffiliateSignup.module.css";

function AffiliateSignup() {
  const { userId } = useParams();
  const [error, setError] = useState("");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onChange",
  });
  const navigate = useNavigate();

  function isValidEmail(email) {
    return email.includes(".ac.uk") || email.includes(".edu");
  }

  async function submitSignup(data, e) {
    e.preventDefault();

    if (!isValidEmail(data.studentEmail)) {
      setError("Please use your student email");
      return;
    }

    createUserWithEmailAndPassword(auth, data.studentEmail, data.password)
      .then(async (result) => {
        const userRef = doc(db, "users", result.user.uid);
        const name = data.studentEmail.split("@")[0];
        const user = {
          name: name,
          email: data.studentEmail,
          id: result.user.uid,
          isVerified: false,
          photoUrl: "",
          reviews: 0,
          avgRating: 0,
          about: "Hey there, I'm new to tradeable!",
        };

        // !Remmber to check if userId exists
        const affiliateUserRef = doc(db, "users", userId);

        await updateDoc(affiliateUserRef, {
          shares: increment(1),
        });

        await setDoc(doc(db, "userChats", result.user.uid), {});
        await setDoc(userRef, user).then(() => {
          sendVerifyEmail(name, data.studentEmail).then(() => {
            navigate("/verify");
          });
        });
      })
      .catch((error) => {
        setError(`${error.message.split(": ")[1]}`);
      });
  }

  return (
    <div className={AffiliateSignupCSS["sign-up-page-container"]}>
      <form
        action=""
        onSubmit={handleSubmit(submitSignup)}
        className={AffiliateSignupCSS["form-container"]}
      >
        <h1 className={`${AffiliateSignupCSS["centered-title"]}`}>Sign up</h1>
        <TextInput
          options={{
            label: "Student email",
            placeholder: "E.g. johndoe@ucl.ac.uk",
            className: AffiliateSignupCSS["input"],
          }}
          formData={{ register, errors }}
        />
        <TextInput
          options={{
            label: "Password",
            placeholder: "Enter your password...",
            className: AffiliateSignupCSS["input"],
            isPassword: true,
          }}
          formData={{ register, errors }}
        />
        <Button
          options={{
            type: "black-filled",
            text: "Create account",
            className: AffiliateSignupCSS["create-account-btn"],
            notRounded: true,
          }}
        />
      </form>
      <Error
        message={error}
        show={error !== ""}
        className={AffiliateSignupCSS["error"]}
      />
      <p className={AffiliateSignupCSS["log-in-text"]}>
        Already have an account?{" "}
        <span onClick={() => navigate("/login")}>Log in</span> instead
      </p>
      <p className={AffiliateSignupCSS["terms-text"]}>
        By signing up with email above, you agree to tradeable's{" "}
        <a target="_blank" href={pdf}>
          Terms & Conditions
        </a>
      </p>
    </div>
  );
}

export default AffiliateSignup;
