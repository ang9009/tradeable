import { loginModalStyles } from "../../data/loginModalStyles";
import Modal from "../../../../components/ui/Modal/Modal";

const LoginModal = ({ isOpen, setIsOpen }) => {
  return (
    <Modal
      isOpen={isOpen}
      handleClose={() => setIsOpen(false)}
      styles={loginModalStyles}
      title={"Sign in"}
    >
      <p>
        Sign in to shareable using a pre-existing account. Please use your CIS
        email to access this website.
      </p>
      <p>Don't have an account? Sign up</p>
    </Modal>
  );
};

export default LoginModal;
