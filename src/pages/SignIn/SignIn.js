import SignInCSS from "./SignIn.module.css";
import { AuthModalContent, useLogin } from "../../features/auth";

function SignIn() {
  const { login, error } = useLogin();

  return (
    <>
      <div className={SignInCSS["sign-in-page-container"]}>
        <h1 className={`page-title ${SignInCSS["centered-title"]}`}>Sign in</h1>
        <div className="page-section-container">
          <AuthModalContent login={login} error={error} />
        </div>
      </div>
    </>
  );
}

export default SignIn;
