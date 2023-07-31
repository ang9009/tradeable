import Error from "../../../../components/ui/Error/Error";
import Modal from "../../../../components/ui/Modal/Modal";
import useLogin from "../../hooks/useLogin";
import SignInButton from "../SignInButton/SignInButton";
import AuthModalCSS from "./AuthModal.module.css";

function AuthModal({ isOpen, setIsOpen, setIsAuthModalOpen }) {
  const { login, error } = useLogin({ setIsAuthModalOpen });

  return (
    <Modal
      isOpen={isOpen}
      handleClose={() => setIsOpen(false)}
      title={"Register/sign in"}
    >
      <p>
        Sign in to shareable using your CIS Gmail account. No registration
        required!
      </p>
      <SignInButton signIn={() => login(setIsAuthModalOpen)} />
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
