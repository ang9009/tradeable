import { useState } from "react";
import { Navigate } from "react-router-dom";
import Error from "../../components/ui/Error/Error";
import { useUser } from "../../context/UserContext";
import ShareCSS from "./Share.module.css";

function Share() {
  const { userData } = useUser();
  const [error, setError] = useState("");

  return userData ? (
    <div className={ShareCSS["page-container"]}>
      <img
        src={require("../../assets/verify_lyla_2.png")}
        className={ShareCSS["lyla-img-mobile"]}
        alt=""
      />
      <div className={ShareCSS["text-container"]}>
        <h1 className={ShareCSS["page-title"]}>Want to get featured?</h1>
        <p className={ShareCSS["text-content"]}>
          Get on the front page by sharing your affiliate sign up link below to
          your friends. Users are featured on the front page in order of most
          shares.
        </p>
        {/* Delay before resend is available */}
        <Error
          message={error}
          show={error !== ""}
          className={ShareCSS["error"]}
        />
      </div>
      <img
        src={require("../../assets/verify_lyla_2.png")}
        className={ShareCSS["lyla-img"]}
        alt=""
      />
    </div>
  ) : (
    <Navigate to="/" />
  );
}

export default Share;
