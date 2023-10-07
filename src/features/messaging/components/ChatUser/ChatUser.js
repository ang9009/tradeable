import { FiFlag } from "react-icons/fi";
import placeholderImg from "../../../../assets/placeholder_img.jpg";
import getMessageTime from "../../utils/getMessageTime";
import ChatUserCSS from "./ChatUser.module.css";

function ChatUser({ selectedChat }) {
  return (
    <div className={ChatUserCSS["component-container"]}>
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
      <FiFlag size={"22px"} className={ChatUserCSS["report-btn"]} />
    </div>
  );
}

export default ChatUser;
