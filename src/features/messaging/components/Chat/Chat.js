import ChatListingInfo from "../ChatListingInfo/ChatListingInfo";
import ChatUser from "../ChatUser/ChatUser";
import ChatCSS from "./Chat.module.css";

function Chat() {
  return (
    <div className={ChatCSS["chat-container"]}>
      <ChatUser />
      <ChatListingInfo />
    </div>
  );
}

export default Chat;
