import { FiX } from "react-icons/fi";
import ReactModal from "react-modal";
import Error from "../../../../components/ui/Error/Error";
import useLogin from "../../hooks/useLogin";
import SignInButton from "../SignInButton/SignInButton";
import AuthModalCSS from "./AuthModal.module.css";

function AuthModal({ isAuthModalOpen, setIsAuthModalOpen }) {
  const { login, error } = useLogin();

  function handleLogin() {
    login().then(() => {
      setIsAuthModalOpen(false);
    });
  }

  return (
    <ReactModal
      isOpen={isAuthModalOpen}
      onRequestClose={() => setIsAuthModalOpen(false)}
      closeTimeoutMS={200}
      className={AuthModalCSS["auth-modal"]}
      overlayClassName={AuthModalCSS["overlay"]}
    >
      <FiX
        size={"20px"}
        onClick={() => setIsAuthModalOpen(false)}
        className={AuthModalCSS["close-btn"]}
      />
      <div className={AuthModalCSS["modal-right"]}>
        <h1 className={AuthModalCSS.title}>Sign in</h1>
        <p className={AuthModalCSS.desc}>
          Use your gmail account to log in to tradeable. No registration
          required.
        </p>
        <SignInButton signIn={() => handleLogin()} />
        <div className={AuthModalCSS.separator}></div>
        <Error
          message={error}
          show={error !== ""}
          className={AuthModalCSS["sign-in-error"]}
        />
        <div class={AuthModalCSS["terms-text"]}>
          By signing into tradeable, I agree to its
          <span className="bold"> Terms & Conditions</span>, which can be viewed{" "}
          <span className="link">here</span>.
        </div>
      </div>
    </ReactModal>
  );
}

export default AuthModal;
