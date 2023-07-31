import {
  getAdditionalUserInfo,
  deleteUser,
  signInWithPopup,
} from "firebase/auth";
import { auth, provider } from "../../../lib/firebase";
import { useState } from "react";

function useLogin({ setIsAuthModalOpen }) {
  const [error, setError] = useState("");

  async function login() {
    await signInWithPopup(auth, provider)
      .then((result) => {
        const isNewUser = getAdditionalUserInfo(result).isNewUser;

        if (isNewUser) {
          auth.signOut();
          deleteUser(result.user);
          throw Error("You don't have an account yet! Sign up instead.");
        }

        setIsAuthModalOpen(false);
      })
      .catch((error) => {
        setError(error.message);
      });
  }

  return { login, error };
}

export default useLogin;
