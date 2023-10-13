import { useUser } from "../../context/UserContext";
import { useLogin } from "../../features/auth";
import LoginCSS from "./Login.module.css";

function Login() {
  const { login, error } = useLogin();
  const { user, isFetchingUser } = useUser();

  return (
    <div className={LoginCSS["sign-in-page-container"]}>
      <h1 className={`page-title ${LoginCSS["centered-title"]}`}>Login</h1>
      <div className="page-section-container"></div>
    </div>
  );
}

export default Login;
