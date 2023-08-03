import Modal from "../../../../components/ui/Modal/Modal";
import useLogin from "../../hooks/useLogin";
import AuthModalContent from "../AuthModalContent/AuthModalContent";

function AuthModal({ isAuthModalOpen, setIsAuthModalOpen }) {
  const { login, error, setError } = useLogin();

  // TODO: seems inefficient?
  // TODO: error should also display banned message

  function handleLogin() {
    login().then(() => {
      setIsAuthModalOpen(false);
    });
  }

  return (
    <Modal
      isOpen={isAuthModalOpen}
      handleClose={() => setIsAuthModalOpen(false)}
      title={"Sign in"}
    >
      <AuthModalContent error={error} login={handleLogin} />
    </Modal>
  );
}

export default AuthModal;
