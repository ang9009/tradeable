import { doc, onSnapshot } from "firebase/firestore";
import {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
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

  const ref = useRef();

  useLayoutEffect(() => {
    ref.current?.scrollIntoView({
      block: "end",
      inline: "nearest",
    });
  }, [messages]);

  return (
    <div className={ChatMessagesCSS["messages-container"]}>
      {messages.map((message) => (
        <ChatMessage message={message} key={message.id} />
      ))}
      <div ref={ref}></div>
    </div>
  );
}

export default ChatMessages;
