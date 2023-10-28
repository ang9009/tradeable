import CopyToClipboard from "react-copy-to-clipboard";
import { FiShare } from "react-icons/fi";
import { toast } from "react-toastify";
import Button from "../../components/ui/Button/Button";
import { UserInfo } from "../../features/profile";
import ProfileCSS from "./Profile.module.css";

function Profile() {
  return (
    <div className={ProfileCSS["page-container"]}>
      <div className={ProfileCSS["profile-top-section"]}>
        <UserInfo />
        <div className={ProfileCSS["profile-btns"]}>
          <CopyToClipboard text={window.location.href}>
            <Button
              options={{
                notRounded: true,
                text: (
                  <div className={ProfileCSS["share-btn"]}>
                    <FiShare
                      size={"15px"}
                      className={ProfileCSS["share-icon"]}
                    />
                    Share
                  </div>
                ),
                type: "black-filled",
                className: ProfileCSS["profile-btn"],
              }}
              onClick={() =>
                toast.success("Link copied to clipboard", {
                  autoClose: 3000,
                  theme: "colored",
                })
              }
            />
          </CopyToClipboard>
          <Button
            options={{
              notRounded: true,
              text: "Edit profile",
              type: "gray-outline",
              className: ProfileCSS["profile-btn"],
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Profile;
