import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../../lib/firebase";
import { useState } from "react";

function useLogin({ setIsAuthModalOpen }) {
  const [error, setError] = useState("");

  async function login() {
    await signInWithPopup(auth, provider)
      .then(() => {
        setIsAuthModalOpen(false);
      })
      .catch((error) => {
        setError(error.message);
      });
  }

  return { login, error };
}

export default useLogin;
