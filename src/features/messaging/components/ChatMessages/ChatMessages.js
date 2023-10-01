import ChatMessage from "./../ChatMessage/ChatMessage";
import ChatMessagesCSS from "./ChatMessages.module.css";

function ChatMessages() {
  return (
    <div className={ChatMessagesCSS["messages-container"]}>
      <ChatMessage />
      <ChatMessage />
      <ChatMessage />
      <ChatMessage />
      <ChatMessage />
      <ChatMessage />
    </div>
  );
}

export default ChatMessages;
