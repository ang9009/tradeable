import {
  deleteUser,
  getAdditionalUserInfo,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";
import { auth, db, doc, provider, setDoc } from "../../../lib/firebase";

function useLogin() {
  const [error, setError] = useState("");

  function isValidEmail(email) {
    return email.endsWith(".ac.uk") || email.endsWith(".edu");
  }

  // Checks if user is of valid domain (.edu or .ac.uk), checked by firebase security reles
  async function login() {
    await signInWithPopup(auth, provider)
      .then(async (result) => {
        const { isNewUser } = getAdditionalUserInfo(result);

        if (!isValidEmail(result.user.email)) {
          setError("Please use an email ending in .ac.uk or .edu");
          deleteUser(result.user);
          signOut(auth);
        } else if (isNewUser) {
          const userRef = doc(db, "users", result.user.uid);
          const user = {
            email: result.user.email,
            name: result.user.displayName,
          };
          await setDoc(userRef, user);
        } else {
          setError("An account already exists with this email");
        }
      })
      .catch((err) => {
        setError(err);
        console.log(err);
      });
  }

  return { login, error, setError };
}

export default useLogin;
