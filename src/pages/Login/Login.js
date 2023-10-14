import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
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
  const {
    register,
    formState: { errors },
    handleSubmit,
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

  return (
    <div className={LoginCSS["login-page-container"]}>
      <form
        action=""
        onSubmit={handleSubmit(submitLogin)}
        className={LoginCSS["form-container"]}
      >
        <h1 className={`${LoginCSS["centered-title"]}`}>Log in</h1>
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
            className: LoginCSS["create-account-btn"],
            notRounded: true,
          }}
        />
      </form>
      <div className={LoginCSS["divider"]}></div>
      <SignInButton setError={setError} />
      <Error
        message={error}
        show={error !== ""}
        className={LoginCSS["error"]}
      />
      <p className={LoginCSS["log-in-text"]}>
        Don't have an account?{" "}
        <span onClick={() => navigate("/")}>Sign up</span> instead
      </p>
    </div>
  );
}

export default Login;
