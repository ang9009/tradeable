import { onIdTokenChanged, sendEmailVerification } from "firebase/auth";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../../components/ui/Button/Button";
import Error from "../../components/ui/Error/Error";
import { useUser } from "../../context/UserContext";
import { auth, db, doc, updateDoc } from "../../lib/firebase";
import VerifyCSS from "./Verify.module.css";

function Verify() {
  const navigate = useNavigate();
  const { userData, user } = useUser();
  const [error, setError] = useState("");

  useEffect(() => {
    const unsub = onIdTokenChanged(auth, (user) => {
      if (user) {
        (async () => {
          await user.reload();

          if (user?.emailVerified) {
            const userRef = doc(db, "users", user.uid);
            updateDoc(userRef, {
              isVerified: true,
            }).then(() => {
              navigate("/");
            });
          }
        })();
      }
    });

    return () => {
      unsub();
    };
  }, []);

  return userData ? (
    <div className={VerifyCSS["page-container"]}>
      <img
        src={require("../../assets/verify_lyla_2.png")}
        className={VerifyCSS["lyla-img-mobile"]}
        alt=""
      />
      <div className={VerifyCSS["text-container"]}>
        <h1 className={VerifyCSS["page-title"]}>
          Verify your email address, {user?.name}
        </h1>
        <p className={VerifyCSS["text-content"]}>
          Please verify your email address using the link we sent to:{" "}
          <span className={VerifyCSS["user-email"]}>{userData?.email}</span>.
          Don't see it? Check your spam folder!
        </p>
        <Button
          options={{
            type: "burgundy-filled",
            text: "Resend email",
            className: VerifyCSS["resend-btn"],
          }}
          onClick={() => {
            sendEmailVerification(userData)
              .then(() => {
                toast.success("Email sent!", {
                  autoClose: 2000,
                });
                setError("");
              })
              .catch((error) => setError(error.message));
          }}
        />
        <Error
          message={error}
          show={error !== ""}
          className={VerifyCSS["error"]}
        />
      </div>
      <img
        src={require("../../assets/verify_lyla.png")}
        className={VerifyCSS["lyla-img"]}
        alt=""
      />
    </div>
  ) : (
    <Navigate to="/" />
  );
}

export default Verify;
