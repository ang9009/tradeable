import SignInButton from "../SignInButton/SignInButton";
import Error from "../../../../components/ui/Error/Error";
import useLogin from "../../hooks/useLogin";
import LoginModalContentCSS from "./LoginModalContent.module.css";

function LoginModalContent({ setIsLogin, setIsAuthModalOpen }) {
  const { login, error } = useLogin({ setIsAuthModalOpen });

  return (
    <>
      <p>
        Sign in to shareable using a pre-existing account. Please use your CIS
        email to access this website.
      </p>
      <SignInButton signIn={() => login()} />
      {error !== "" && <Error message={error} />}
      <div className="separator"></div>
      <p className={LoginModalContentCSS["sign-up-text"]}>
        {"Don't have an account? "}
        <span className="link" onClick={() => setIsLogin(false)}>
          Sign up
        </span>
      </p>
    </>
  );
}

export default LoginModalContent;
