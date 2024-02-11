import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import Skeleton from "react-loading-skeleton";
import { toast } from "react-toastify";
import Button from "../../components/ui/Button/Button";
import Error from "../../components/ui/Error/Error";
import { useUser } from "../../context/UserContext";
import ShareCSS from "./Share.module.css";

function Share() {
  const { isFetchingUser, user } = useUser();
  const [error, setError] = useState("");
  const bruh = "bruh";

  return !isFetchingUser ? (
    <div className={ShareCSS["page-container"]}>
      <div className={ShareCSS["text-container"]}>
        <h1 className={ShareCSS["page-title"]}>
          Get on the front page through shares, {user?.name}
        </h1>
        <p className={ShareCSS["text-content"]}>
          Get share points by getting your friends to sign up through your
          affiliate signup link. Users are listed on the front page in order of
          most shares.
        </p>
        <CopyToClipboard
          text={`https://www.tradeable.gg/affiliatesignup/${user?.id}`}
        >
          <Button
            options={{
              type: "burgundy-filled",
              text: "Copy link",
              className: ShareCSS["signup-copy-btn"],
            }}
            onClick={() =>
              toast.success("Link copied to clipboard!", { autoClose: 3000 })
            }
          />
        </CopyToClipboard>
        <Error
          message={error}
          show={error !== ""}
          className={ShareCSS["error"]}
        />
      </div>
      <img
        src={require("../../assets/share-browser.png")}
        className={ShareCSS["browser-img"]}
        alt=""
      />
    </div>
  ) : (
    <Skeleton />
  );
}

export default Share;
