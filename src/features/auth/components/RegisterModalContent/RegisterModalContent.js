import Error from "../../../../components/ui/Error/Error";
import useRegister from "../../hooks/useRegister";
import SignInButton from "../SignInButton/SignInButton";
import RegisterModalContentCSS from "./RegisterModalContent.module.css";

function RegisterModalContent({ setIsLogin, setIsAuthModalOpen }) {
  const { register, error } = useRegister({ setIsAuthModalOpen });

  return (
    <>
      <p>Register for a new shareable account using your CIS Gmail account.</p>
      <SignInButton signIn={() => register(setIsAuthModalOpen)} />
      <div id={RegisterModalContentCSS["terms-text"]}>
        By creating an account, I agree to shareable's
        <span className="bold"> Terms & Conditions</span>. To view our terms,
        please click <span className="link">here</span>.
      </div>
      {error !== "" && <Error message={error} />}
      <div className="separator"></div>
      <p className={RegisterModalContentCSS["sign-in-text"]}>
        {"Already have an account? "}
        <span className="link" onClick={() => setIsLogin(true)}>
          Sign in
        </span>
      </p>
    </>
  );
}

export default RegisterModalContent;
