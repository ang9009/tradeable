import { onIdTokenChanged } from "firebase/auth";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import { auth } from "../../lib/firebase";

function Verify() {
  const navigate = useNavigate();
  const { userData } = useUser();

  useEffect(() => {
    const unsub = onIdTokenChanged(auth, (user) => {
      if (user) {
        (async () => {
          await user.reload();

          if (user?.emailVerified) {
            navigate("/");
          }
        })();
      }
    });

    return () => {
      unsub();
    };
  }, []);

  return userData ? (
    <>
      <h1>Welcome to tradeable</h1>
      <p>
        Please verify your email using the link we sent to you. Check your spam
        folder!
      </p>
      <p>Didn't receive an email? Send me another one</p>
    </>
  ) : (
    <Navigate to="/" />
  );
}

export default Verify;
