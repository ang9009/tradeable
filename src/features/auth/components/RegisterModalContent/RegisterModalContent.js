import { register } from "../../../../lib/firebase";
import SignInButton from "../SignInButton/SignInButton";
import RegisterModalContentCSS from "./RegisterModalContent.module.css";

function RegisterModalContent({ setIsLogin, setIsAuthModalOpen }) {
  return (
    <>
      <p>Register for a new shareable account using your CIS Gmail account.</p>
      <SignInButton signIn={() => register(setIsAuthModalOpen)} />
      <div id={RegisterModalContentCSS["terms-text"]}>
        By creating an account, I agree to shareable's
        <span className="bold"> Terms & Conditions</span>. To view our terms,
        please click <span className="link">here</span>.
      </div>
      <div className="separator"></div>
      <p>
        {"Already have an account? "}
        <span className="link" onClick={() => setIsLogin(true)}>
          Sign in
        </span>
      </p>
    </>
  );
}

export default RegisterModalContent;
