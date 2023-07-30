import Modal from "../../../../components/ui/Modal/Modal";
import LoginModalContent from "../LoginModalContent/LoginModalContent";
import RegisterModalContent from "../RegisterModalContent/RegisterModalContent";

function AuthModal({ isOpen, setIsOpen, isLogin, setIsLogin }) {
  return (
    <Modal
      isOpen={isOpen}
      handleClose={() => setIsOpen(false)}
      title={isLogin ? "Sign in" : "Sign up"}
    >
      {isLogin ? (
        <LoginModalContent
          setIsLogin={setIsLogin}
          setIsAuthModalOpen={setIsOpen}
        />
      ) : (
        <RegisterModalContent
          setIsLogin={setIsLogin}
          setIsAuthModalOpen={setIsOpen}
        />
      )}
    </Modal>
  );
}

export default AuthModal;
