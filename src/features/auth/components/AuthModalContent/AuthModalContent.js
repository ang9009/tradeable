import Error from "../../../../components/ui/Error/Error";
import SignInButton from "../SignInButton/SignInButton";
import AuthModalContentCSS from "./AuthModalContent.module.css";

function AuthModalContent({ error, login }) {
  return (
    <>
      <p>
        Use your CIS gmail account to log in to shareable. No registration
        required.
      </p>
      <SignInButton signIn={() => login()} />
      <Error
        message={error}
        show={error !== ""}
        className={AuthModalContentCSS["sign-in-error"]}
      />
      <div className="separator"></div>
      <div id={AuthModalContentCSS["terms-text"]}>
        By signing into shareable, I agree to its
        <span className="bold"> Terms & Conditions</span>. To view our terms,
        please click <span className="link">here</span>.
      </div>
    </>
  );
}

export default AuthModalContent;
