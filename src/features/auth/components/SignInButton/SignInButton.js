import { FcGoogle } from "react-icons/fc";
import SignInButtonCSS from "./SignInButton.module.css";

function SignInButton({ signIn }) {
  return (
    <button className={SignInButtonCSS["sign-in-btn"]} onClick={signIn}>
      <FcGoogle size={"20px"} />
      <p>Continue with Google</p>
    </button>
  );
}

export default SignInButton;
