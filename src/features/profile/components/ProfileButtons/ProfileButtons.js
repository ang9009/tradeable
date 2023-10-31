import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { FiFlag, FiShare } from "react-icons/fi";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../../../../components/ui/Button/Button";
import { useUser } from "../../../../context/UserContext";
import ReportModal from "../../../messaging/components/ReportModal/ReportModal";
import ProfileButtonsCSS from "./ProfileButtons.module.css";

function ProfileButtons() {
  const userId = useParams().userId;
  const { user } = useUser();
  const [reportModalIsOpen, setReportModalIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className={ProfileButtonsCSS["profile-btns"]}>
      <CopyToClipboard text={window.location.href}>
        <Button
          options={{
            notRounded: true,
            text: (
              <div className={ProfileButtonsCSS["share-btn"]}>
                <FiShare
                  size={"15px"}
                  className={ProfileButtonsCSS["share-icon"]}
                />
                Share
              </div>
            ),
            type: "black-filled",
            className: ProfileButtonsCSS["profile-btn"],
          }}
          onClick={() =>
            toast.success("Link copied to clipboard", {
              autoClose: 3000,
              theme: "colored",
            })
          }
        />
      </CopyToClipboard>
      {user?.id === userId ? (
        <Button
          options={{
            notRounded: true,
            text: "Edit profile",
            type: "gray-outline",
            className: ProfileButtonsCSS["profile-btn"],
          }}
        />
      ) : (
        <Button
          options={{
            notRounded: true,
            text: (
              <div className={ProfileButtonsCSS["share-btn"]}>
                <FiFlag
                  size={"15px"}
                  className={ProfileButtonsCSS["share-icon"]}
                />
                Report
              </div>
            ),
            type: "gray-outline",
            className: ProfileButtonsCSS["profile-btn"],
          }}
          onClick={() =>
            user ? setReportModalIsOpen(true) : navigate("/login")
          }
        />
      )}
      <ReportModal
        reportModalIsOpen={reportModalIsOpen}
        setReportModalIsOpen={setReportModalIsOpen}
        reportedUserId={userId}
      />
    </div>
  );
}

export default ProfileButtons;
