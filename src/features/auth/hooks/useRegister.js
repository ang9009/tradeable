import { useState } from "react";
import { auth, provider } from "../../../lib/firebase";
import { getAdditionalUserInfo, signInWithPopup } from "firebase/auth";

function useRegister({ setIsAuthModalOpen }) {
  const [error, setError] = useState("");

  async function register() {
    await signInWithPopup(auth, provider)
      .then((result) => {
        const isNewUser = getAdditionalUserInfo(result).isNewUser;

        if (!isNewUser) {
          throw Error("You already have an account! Sign in instead.");
        }

        setIsAuthModalOpen(false);
      })
      .catch((error) => {
        setError(error.message);
      });
  }

  return { register, error };
}

export default useRegister;
