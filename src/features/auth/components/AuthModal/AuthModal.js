import Error from "../../../../components/ui/Error/Error";
import Modal from "../../../../components/ui/Modal/Modal";
import useLogin from "../../hooks/useLogin";
import SignInButton from "../SignInButton/SignInButton";
import AuthModalCSS from "./AuthModal.module.css";

function AuthModal({ isAuthModalOpen, setIsAuthModalOpen }) {
  const { login, error } = useLogin({ setIsAuthModalOpen });

  return (
    <Modal
      isOpen={isAuthModalOpen}
      handleClose={() => setIsAuthModalOpen(false)}
      title={"Sign in"}
    >
      <p>
        Use your CIS gmail account to log in to shareable. No registration
        required.
      </p>
      <SignInButton signIn={() => login()} />
      {error !== "" && <Error message={error} />}
      <div className="separator"></div>
      <div id={AuthModalCSS["terms-text"]}>
        By signing into shareable, I agree to its
        <span className="bold"> Terms & Conditions</span>. To view our terms,
        please click <span className="link">here</span>.
      </div>
    </Modal>
  );
}

export default AuthModal;
