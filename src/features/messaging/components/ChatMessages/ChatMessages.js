import { doc, onSnapshot } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { db } from "../../../../lib/firebase";
import { ChatContext } from "../../context/ChatContext";
import ChatMessage from "../ChatMessage/ChatMessage";
import ChatMessagesCSS from "./ChatMessages.module.css";

function ChatMessages() {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => unsub();
  }, [data.chatId]);

  return (
    <div className={ChatMessagesCSS["messages-container"]}>
      {messages.map((message) => (
        <ChatMessage message={message} key={message.id} />
      ))}
    </div>
  );
}

export default ChatMessages;
