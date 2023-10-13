import { Navigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import { useLogin } from "../../features/auth";
import SignupCSS from "./Signup.module.css";

function Signup() {
  const { login, error } = useLogin();
  const { user, isFetchingUser } = useUser();

  return isFetchingUser ? (
    <></>
  ) : !user ? (
    <div className={SignupCSS["sign-up-page-container"]}>
      <h1 className={`page-title ${SignupCSS["centered-title"]}`}>Sign up</h1>
      <div className="page-section-container"></div>
    </div>
  ) : (
    <Navigate to="/" />
  );
}

export default Signup;
