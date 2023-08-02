import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../../lib/firebase";
import { useState } from "react";

function useLogin() {
  const [error, setError] = useState("");

  async function login() {
    await signInWithPopup(auth, provider).catch((error) => {
      setError(error.message);
    });
  }

  return { login, error, setError };
}

export default useLogin;
