import { FiArrowLeft, FiFlag } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import placeholderImg from "../../../../assets/placeholder_img.jpg";
import getMessageTime from "../../utils/getMessageTime";
import ChatUserCSS from "./ChatUser.module.css";

function ChatUser({ selectedChat }) {
  const navigate = useNavigate();

  return (
    <div className={ChatUserCSS["component-container"]}>
      <div className={ChatUserCSS["chat-user-left"]}>
        <FiArrowLeft
          onClick={() => navigate("/messages")}
          size={"25px"}
          className={ChatUserCSS["arrow-btn"]}
        />
        <div className={ChatUserCSS["user-info"]}>
          <img
            src={selectedChat[1].userInfo.photoUrl || placeholderImg}
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
      <FiFlag size={"25px"} className={ChatUserCSS["report-btn"]} />
    </div>
  );
}

export default ChatUser;
