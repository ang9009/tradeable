import { onIdTokenChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import Countdown from "react-countdown";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../../components/ui/Button/Button";
import Error from "../../components/ui/Error/Error";
import { useUser } from "../../context/UserContext";
import { sendVerifyEmail } from "../../features/auth";
import { auth, db, doc, getDoc, setDoc, updateDoc } from "../../lib/firebase";
import VerifyCSS from "./Verify.module.css";

function Verify() {
  const { userData, user } = useUser();
  const [error, setError] = useState("");
  const [countdownKey, setCountdownKey] = useState(0);
  const navigate = useNavigate();

  // If user doesn't exist
  useEffect(() => {
    if (userData && Object.hasOwn(userData, "uid")) {
      const userRef = doc(db, "users", userData.uid);

      getDoc(userRef).then(async (res) => {
        if (!res.exists()) {
          const userRef = doc(db, "users", userData.uid);
          const name = userData.email.split("@")[0];
          const user = {
            name: name,
            email: userData.email,
            id: userData.uid,
            isVerified: false,
            photoUrl: "",
            reviews: 0,
            avgRating: 0,
            about: "Hey there, I'm new to tradeable!",
          };

          await setDoc(doc(db, "userChats", userData.uid), {});
          await setDoc(userRef, user);

          window.location.reload();
        }
      });
    }
  }, [userData]);

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
              navigate("/share");
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

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return (
        <Button
          options={{
            type: "burgundy-filled",
            text: "Resend email",
            className: VerifyCSS["resend-btn"],
          }}
          onClick={() => {
            sendVerifyEmail(userData?.email.split("@")[0], userData?.email);
            toast.success("Verification email resent!");
            setCountdownKey((prev) => prev + 1);
          }}
        />
      );
    } else {
      // Render a countdown
      return (
        <div className={VerifyCSS["resend-msg"]}>
          <Button
            options={{
              type: "burgundy-filled",
              text: "Resend email",
              className: VerifyCSS["resend-btn"],
            }}
            disabled
          />
          <p>({seconds})</p>
        </div>
      );
    }
  };

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
          {userData?.email}. Don't see it? Check your junk emails!
        </p>
        <p className={VerifyCSS["text-content"]}>
          <span className={VerifyCSS["user-email"]}>
            Please note that this may take up to a few minutes
          </span>
          . If you are not automatically redirected,{" "}
          <span
            className={VerifyCSS["reload-page"]}
            onClick={() => window.location.reload()}
          >
            reload the page
          </span>
          .
        </p>
        {/* Delay before resend is available */}
        <div className={VerifyCSS["verify-btn-countdown"]}>
          <Countdown
            key={countdownKey}
            date={Date.now() + 30000}
            intervalDelay={0}
            precision={3}
            renderer={renderer}
          />
        </div>
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
