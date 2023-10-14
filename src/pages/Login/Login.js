import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import TextInput from "../../components/form/TextInput/TextInput";
import Button from "../../components/ui/Button/Button";
import Error from "../../components/ui/Error/Error";
import { useUser } from "../../context/UserContext";
import SignInButton from "../../features/auth/components/SignInButton/SignInButton";
import { auth } from "../../lib/firebase";
import LoginCSS from "./Login.module.css";

function Login() {
  const { user, isFetchingUser } = useUser();
  const [error, setError] = useState("");
  const [forgotPasswordError, setForgotPasswordError] = useState("");
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onChange",
  });

  const {
    register: register2,
    formState: { errors: errors2 },
    handleSubmit: handleSubmit2,
  } = useForm({
    mode: "onChange",
  });

  const navigate = useNavigate();

  function submitLogin(data, e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, data.studentEmail, data.password)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        setError(`${error.message.split(": ")[1]}`);
      });
  }

  function submitResetPassword(data, e) {
    e.preventDefault();
    console.log(data.resetEmail);
    sendPasswordResetEmail(auth, data.resetEmail)
      .then(() => {
        toast.success("Email sent! Check your spam folder.", {
          autoClose: 3000,
        });
        setShowForgotPassword(false);
      })
      .catch((error) =>
        setForgotPasswordError(`${error.message.split(": ")[1]}`)
      );
  }

  return (
    <div className={LoginCSS["login-page-container"]}>
      <h1 className={`${LoginCSS["centered-title"]}`}>Log in</h1>
      {!showForgotPassword ? (
        <form
          onSubmit={handleSubmit(submitLogin)}
          className={LoginCSS["form-container"]}
          key={1}
        >
          <TextInput
            options={{
              label: "Student email",
              placeholder: "E.g. johndoe@ucl.ac.uk",
              className: LoginCSS["input"],
            }}
            formData={{ register, errors }}
          />
          <TextInput
            options={{
              label: "Password",
              placeholder: "Enter your password...",
              className: LoginCSS["input"],
              isPassword: true,
            }}
            formData={{ register, errors }}
          />
          <Button
            options={{
              type: "black-filled",
              text: "Log in",
              className: LoginCSS["submit-btn"],
              notRounded: true,
            }}
          />
        </form>
      ) : (
        <form key={2} onSubmit={handleSubmit2(submitResetPassword)}>
          <div
            className={`input-field-container ${LoginCSS["reset-password-input"]}`}
          >
            <label className={"input-label"} htmlFor={"reset-password"}>
              Reset password
            </label>
            <input
              id="reset-password"
              type="text"
              className={"input"}
              placeholder="Enter your email here..."
              {...register2("resetEmail", {
                required: "This input is required",
              })}
              style={{
                outline: errors["resetEmail"] && "var(--input-warning-border)",
              }}
            />
          </div>
          <Button
            options={{
              type: "black-filled",
              notRounded: true,
              text: "Submit",
              className: LoginCSS["submit-btn"],
            }}
          />
          <Error
            message={forgotPasswordError}
            show={forgotPasswordError !== ""}
            className={LoginCSS["error"]}
          />
        </form>
      )}
      <div className={LoginCSS["divider"]}></div>
      <SignInButton setError={setError} />
      <Error
        message={error}
        show={error !== ""}
        className={LoginCSS["error"]}
      />
      {showForgotPassword || (
        <p
          className={LoginCSS["hints"]}
          onClick={() => setShowForgotPassword(true)}
        >
          Forgot password?
        </p>
      )}
      <p className={LoginCSS["hints"]}>
        Don't have an account?{" "}
        <span onClick={() => navigate("/")}>Sign up</span> instead
      </p>
    </div>
  );
}

export default Login;
