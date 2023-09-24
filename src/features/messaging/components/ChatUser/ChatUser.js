import { FiFlag } from "react-icons/fi";
import ChatUserCSS from "./ChatUser.module.css";

function ChatUser() {
  return (
    <div className={ChatUserCSS["component-container"]}>
      <div className={ChatUserCSS["user-info"]}>
        <img
          src={require("../../../../assets/authmodal_img.jpg")}
          className={ChatUserCSS["profile-img"]}
          alt=""
        />
        <div className={ChatUserCSS["name-and-status"]}>
          <h1>Alan Au</h1>
          <p className={ChatUserCSS.status}>Online</p>
        </div>
      </div>
      <FiFlag size={"22px"} className={ChatUserCSS["report-btn"]} />
    </div>
  );
}

export default ChatUser;
