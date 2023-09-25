import { FiFlag } from "react-icons/fi";
import ChatUserCSS from "./ChatUser.module.css";

function ChatUser({ userInfo }) {
  return (
    <div className={ChatUserCSS["component-container"]}>
      <div className={ChatUserCSS["user-info"]}>
        <img
          src={userInfo.photoUrl}
          className={ChatUserCSS["profile-img"]}
          alt=""
        />
        <div className={ChatUserCSS["name-and-status"]}>
          <h1>{userInfo.name}</h1>
          <p className={ChatUserCSS.status}>Last message sent 1 minute ago</p>
        </div>
      </div>
      <FiFlag size={"22px"} className={ChatUserCSS["report-btn"]} />
    </div>
  );
}

export default ChatUser;
