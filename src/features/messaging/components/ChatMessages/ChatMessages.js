import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../../../lib/firebase";
import ChatMessage from "../ChatMessage/ChatMessage";
import ChatMessagesCSS from "./ChatMessages.module.css";

function ChatMessages() {
  const [messages, setMessages] = useState([]);
  const { chatId } = useParams();

  useEffect(() => {
    function getMessages() {
      const unsub = onSnapshot(doc(db, "chats", chatId), (doc) => {
        doc.exists() && setMessages(doc.data().messages);
      });

      return () => unsub();
    }

    chatId && getMessages();
  }, [chatId]);

  return (
    <div className={ChatMessagesCSS["messages-container"]}>
      {messages.map((message) => (
        <ChatMessage message={message} key={message.id} />
      ))}
    </div>
  );
}

export default ChatMessages;
