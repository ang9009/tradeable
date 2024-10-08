import ChatMessage from "../ChatMessage/ChatMessage";
import ChatMessagesCSS from "./ChatMessages.module.css";

function ChatMessages({ messages }) {
  return (
    <div className={ChatMessagesCSS["messages-wrapper"]}>
      <div className={ChatMessagesCSS["messages-container"]}>
        {messages?.map((message) => (
          <ChatMessage message={message} key={message.id} />
        ))}
      </div>
    </div>
  );
}

export default ChatMessages;
