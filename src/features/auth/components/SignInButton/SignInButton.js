import {
  deleteUser,
  getAdditionalUserInfo,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { auth, db, doc, provider, setDoc } from "../../../../lib/firebase";
import SignInButtonCSS from "./SignInButton.module.css";

function SignInButton({ setError }) {
  const navigate = useNavigate();

  function isValidEmail(email) {
    return email.includes(".ac.uk") || email.includes(".edu");
  }

  // Checks if user is of valid domain (.edu or .ac.uk), checked by firebase security reles
  async function login() {
    await signInWithPopup(auth, provider)
      .then(async (result) => {
        const { isNewUser } = getAdditionalUserInfo(result);

        if (!isValidEmail(result.user.email)) {
          setError("Please use your student email");
          deleteUser(result.user);
          signOut(auth);
        } else if (isNewUser) {
          const userRef = doc(db, "users", result.user.uid);
          const name = result.user.email.split("@")[0];
          const user = {
            name: name,
            email: result.user.email,
            id: result.user.uid,
            isVerified: false,
          };

          setDoc(userRef, user).then(() => {
            navigate("/*");
          });
        } else {
          setError("An account already exists with this email");
        }
      })
      .catch((err) => {
        setError(err);
        console.log(err);
      });
  }

  return (
    <button className={SignInButtonCSS["sign-in-btn"]} onClick={login}>
      <FcGoogle size={"20px"} />
      <p>Continue with Google</p>
    </button>
  );
}

export default SignInButton;
