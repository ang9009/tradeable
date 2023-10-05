import { getAdditionalUserInfo, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { auth, createUser, provider } from "../../../lib/firebase";

function useLogin() {
  const [error, setError] = useState("");

  async function login() {
    await signInWithPopup(auth, provider)
      .then(async (result) => {
        const { isNewUser } = getAdditionalUserInfo(result);

        if (isNewUser) {
          createUser(result.user);
        }
      })
      .catch((error) => {
        setError(error.message);
      });
  }

  return { login, error, setError };
}

export default useLogin;
