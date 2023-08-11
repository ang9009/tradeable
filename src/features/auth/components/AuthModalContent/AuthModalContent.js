import Error from "../../../../components/ui/Error/Error";
import SignInButton from "../SignInButton/SignInButton";
import AuthModalContentCSS from "./AuthModalContent.module.css";

function AuthModalContent({ error, login }) {
  return (
    <>
      <div className={AuthModalContentCSS["text-flex-container"]}>
        <h1 className={AuthModalContentCSS.title}>
          Sign in to access shareable
        </h1>
        <p className={AuthModalContentCSS.desc}>
          Use your CIS gmail account to log in to shareable. No registration
          required.
        </p>
      </div>
      <SignInButton signIn={() => login()} />
      {/* <div className="separator"></div> */}
      <Error
        message={error}
        show={error !== ""}
        className={AuthModalContentCSS["sign-in-error"]}
      />
      {/* <div id={AuthModalContentCSS["terms-text"]}>
        By signing into shareable, I agree to its
        <span className="bold"> Terms & Conditions</span>. To view our terms,
        please click <span className="link">here</span>.
      </div> */}
    </>
  );
}

export default AuthModalContent;
