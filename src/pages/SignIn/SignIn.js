import { Navigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import { AuthModalContent, useLogin } from "../../features/auth";
import SignInCSS from "./SignIn.module.css";

function SignIn() {
  const { login, error } = useLogin();
  const { user, isFetchingUser } = useUser();

  return isFetchingUser ? (
    <></>
  ) : !user ? (
    <div className={SignInCSS["sign-in-page-container"]}>
      <h1 className={`page-title ${SignInCSS["centered-title"]}`}>Sign in</h1>
      <div className="page-section-container">
        <AuthModalContent login={login} error={error} />
      </div>
    </div>
  ) : (
    <Navigate to="/" />
  );
}

export default SignIn;
