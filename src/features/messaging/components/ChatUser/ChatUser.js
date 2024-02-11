import { useEffect, useState } from "react";
import { FiArrowLeft, FiFlag } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import checkImage from "../../../../utils/checkImage";
import getMessageTime from "../../utils/getMessageTime";
import ReportModal from "../ReportModal/ReportModal";
import ChatUserCSS from "./ChatUser.module.css";

function ChatUser({ selectedChat }) {
  const navigate = useNavigate();
  const [reportModalIsOpen, setReportModalIsOpen] = useState(false);
  const [userPhoto, setUserPhoto] = useState(
    require("../../../../assets/profile_placeholder.png")
  );

  useEffect(() => {
    const userPhotoUrl = `https://storage.googleapis.com/tradeable-6ed31.appspot.com/profileImages/${selectedChat[1].userInfo.id}`;

    checkImage(userPhotoUrl).then((userPhotoExists) => {
      if (userPhotoExists) {
        setUserPhoto(userPhotoUrl);
      } else {
        setUserPhoto(require("../../../../assets/profile_placeholder.png"));
      }
    });
  }, [selectedChat]);

  return (
    <div className={ChatUserCSS["component-container"]}>
      <div className={ChatUserCSS["chat-user-left"]}>
        <FiArrowLeft
          onClick={() => navigate("/messages")}
          size={"25px"}
          className={ChatUserCSS["arrow-btn"]}
        />
        <div
          className={ChatUserCSS["user-info"]}
          onClick={() =>
            navigate(`/profile/${selectedChat[1].userInfo.id}/listings`)
          }
        >
          <img
            src={userPhoto}
            className={ChatUserCSS["profile-img"]}
            alt={""}
          />
          <div className={ChatUserCSS["name-and-status"]}>
            <h1>{selectedChat[1].userInfo.name}</h1>
            <p className={ChatUserCSS.status}>
              Last updated {getMessageTime(selectedChat[1].date)}
            </p>
          </div>
        </div>
      </div>
      <FiFlag
        size={"25px"}
        className={ChatUserCSS["report-btn"]}
        onClick={() => setReportModalIsOpen(true)}
      />
      <ReportModal
        reportModalIsOpen={reportModalIsOpen}
        setReportModalIsOpen={setReportModalIsOpen}
        reportedUserId={selectedChat[1].userInfo.id}
      />
    </div>
  );
}

export default ChatUser;
