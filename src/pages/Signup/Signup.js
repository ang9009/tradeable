import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import TextInput from "../../components/form/TextInput/TextInput";
import { useUser } from "../../context/UserContext";
import { useLogin } from "../../features/auth";
import SignupCSS from "./Signup.module.css";

function Signup() {
  const { login, error } = useLogin();
  const { user, isFetchingUser } = useUser();
  const {
    register,
    formState: { errors },
  } = useForm();

  return isFetchingUser ? (
    <></>
  ) : !user ? (
    <div className={SignupCSS["sign-up-page-container"]}>
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
      <div className={SignupCSS["divider"]}></div>
    </div>
  ) : (
    <Navigate to="/" />
  );
}

export default Signup;
