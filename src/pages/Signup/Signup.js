import {
  createUserWithEmailAndPassword,
  deleteUser,
  getAdditionalUserInfo,
  sendEmailVerification,
  signOut,
} from "firebase/auth";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import TextInput from "../../components/form/TextInput/TextInput";
import Button from "../../components/ui/Button/Button";
import Error from "../../components/ui/Error/Error";
import { useUser } from "../../context/UserContext";
import SignInButton from "../../features/auth/components/SignInButton/SignInButton";
import { auth, db, doc, setDoc } from "../../lib/firebase";
import SignupCSS from "./Signup.module.css";

function Signup() {
  const { user, isFetchingUser } = useUser();
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

  function submitSignup(data, e) {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, data.studentEmail, data.password)
      .then((result) => {
        const { isNewUser } = getAdditionalUserInfo(result);
        // !isValidEmail(result.user.email)
        if (false) {
          setError("Please use your student email");
          deleteUser(result.user);
          signOut(auth);
        } else if (isNewUser) {
          const userRef = doc(db, "users", result.user.uid);
          const name = data.studentEmail.split("@")[0];
          const user = {
            name: name,
            email: data.studentEmail,
            id: result.user.uid,
            isVerified: false,
            photoUrl:
              "https://storage.googleapis.com/tradeable-6ed31.appspot.com/profileImages/profile_placeholder.png",
          };

          setDoc(doc(db, "userChats", result.user.uid), {});
          setDoc(userRef, user).then(() => {
            sendEmailVerification(result.user);
            navigate("/verify");
          });
        }
      })
      .catch((error) => {
        setError(`${error.message.split(": ")[1]}`);
      });
  }

  return (
    <div className={SignupCSS["sign-up-page-container"]}>
      <form
        action=""
        onSubmit={handleSubmit(submitSignup)}
        className={SignupCSS["form-container"]}
      >
        <h1 className={`${SignupCSS["centered-title"]}`}>Sign up</h1>
        <TextInput
          options={{
            label: "Student email",
            placeholder: "E.g. johndoe@ucl.ac.uk",
            className: SignupCSS["input"],
          }}
          formData={{ register, errors }}
        />
        <TextInput
          options={{
            label: "Password",
            placeholder: "Enter your password...",
            className: SignupCSS["input"],
            isPassword: true,
          }}
          formData={{ register, errors }}
        />
        <Button
          options={{
            type: "black-filled",
            text: "Create account",
            className: SignupCSS["create-account-btn"],
            notRounded: true,
          }}
        />
      </form>
      <div className={SignupCSS["divider"]}></div>
      <SignInButton setError={setError} />
      <Error
        message={error}
        show={error !== ""}
        className={SignupCSS["error"]}
      />
      <p className={SignupCSS["log-in-text"]}>
        Already have an account?{" "}
        <span onClick={() => navigate("/login")}>Log in</span> instead
      </p>
      <p className={SignupCSS["terms-text"]}>
        By signing up with email or via Google above, you agree to tradeable's{" "}
        <span>Terms & Conditions</span>
      </p>
    </div>
  );
}

export default Signup;
