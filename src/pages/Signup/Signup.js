import {
  createUserWithEmailAndPassword,
  deleteUser,
  getAdditionalUserInfo,
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
    createUserWithEmailAndPassword(auth, data.collegeEmail, data.password)
      .then(async (result) => {
        const { isNewUser } = getAdditionalUserInfo(result);

        if (!isValidEmail(result.user.email)) {
          setError("Please use an email ending in .ac.uk or .edu");
          deleteUser(result.user);
          signOut(auth);
        } else if (isNewUser) {
          const userRef = doc(db, "users", result.user.uid);
          const user = {
            email: result.user.email,
            name: result.user.displayName,
          };
          await setDoc(userRef, user);
          navigate("/");
        }
      })
      .catch((error) =>
        setError("Email is invalid, or account already exists")
      );
  }

  return (
    <div className={SignupCSS["sign-up-page-container"]}>
      <form action="" onSubmit={handleSubmit(submitSignup)}>
        <h1 className={`${SignupCSS["centered-title"]}`}>Sign up</h1>
        <TextInput
          options={{
            label: "College email",
            placeholder: "E.g. johndoe@ucl.ac.uk",
            className: SignupCSS["email-input"],
          }}
          formData={{ register, errors }}
        />
        <TextInput
          options={{
            label: "Password",
            placeholder: "Enter your password...",
            className: SignupCSS["password-input"],
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
