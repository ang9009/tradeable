import { Chat, ChatsList } from "../../features/messaging";
import MessagesCSS from "./Messages.module.css";

function Messages() {
  return (
    <div className={MessagesCSS["components-container"]}>
      <ChatsList />
      <Chat />
    </div>
  );
}

export default Messages;
