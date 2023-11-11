import { onIdTokenChanged, sendEmailVerification } from "firebase/auth";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../../components/ui/Button/Button";
import Error from "../../components/ui/Error/Error";
import { useUser } from "../../context/UserContext";
import { auth, db, doc, updateDoc } from "../../lib/firebase";
import VerifyCSS from "./Verify.module.css";

function Verify() {
  const { userData } = useUser();
  const [error, setError] = useState("");

  useEffect(() => {
    const unsub = onIdTokenChanged(auth, (user) => {
      if (user) {
        (async () => {
          await user.reload();

          if (userData.emailVerified) {
            const userRef = doc(db, "users", user.uid);
            updateDoc(userRef, {
              isVerified: true,
            }).then(() => {
              window.location.reload();
            });
          }
        })();
      }
    });

    return () => {
      unsub();
    };
  }, []);

  function sendEmail() {
    sendEmailVerification(userData)
      .then(() => {
        toast.success("Email sent!", {
          autoClose: 2000,
        });

        setError("");
      })
      .catch((error) => setError(error.message));
  }

  return userData ? (
    <div className={VerifyCSS["page-container"]}>
      <img
        src={require("../../assets/verify_lyla_2.png")}
        className={VerifyCSS["lyla-img-mobile"]}
        alt=""
      />
      <div className={VerifyCSS["text-container"]}>
        <h1 className={VerifyCSS["page-title"]}>
          Check your inbox and junk emails, {userData?.email.split("@")[0]}
        </h1>
        <p className={VerifyCSS["text-content"]}>
          Please verify your email address using the link we sent to:{" "}
          {userData?.email}.
        </p>
        <p className={VerifyCSS["text-content"]}>
          <span className={VerifyCSS["user-email"]}>
            Please note that this may take up to a few minutes
          </span>
          . Don't see it? Check your junk emails! Once you have verified your
          email, reload the page.
        </p>
        <Button
          options={{
            type: "burgundy-filled",
            text: "Resend email",
            className: VerifyCSS["resend-btn"],
          }}
          onClick={() => sendEmail()}
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
