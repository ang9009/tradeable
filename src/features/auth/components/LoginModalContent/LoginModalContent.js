import SignInButton from "../SignInButton/SignInButton";
import { signIn } from "../../../../lib/firebase";
import Error from "../../../../components/ui/Error/Error";
import { useState } from "react";

function LoginModalContent({ setIsLogin, setIsAuthModalOpen }) {
  const [errorMsg, setErrorMsg] = useState("");
  function handleSignIn() {
    signIn(setIsAuthModalOpen).catch((error) => setErrorMsg(error.message));
  }

  return (
    <>
      <p>
        Sign in to shareable using a pre-existing account. Please use your CIS
        email to access this website.
      </p>
      <SignInButton signIn={handleSignIn} />
      {errorMsg !== "" && <Error message={errorMsg} />}
      <div className="separator"></div>
      <p>
        {"Don't have an account? "}
        <span className="link" onClick={() => setIsLogin(false)}>
          Sign up
        </span>
      </p>
    </>
  );
}

export default LoginModalContent;
