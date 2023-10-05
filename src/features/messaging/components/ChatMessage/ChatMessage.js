import { useContext, useEffect, useRef } from "react";
import { useUser } from "../../../../context/UserContext";
import { ChatContext } from "../../context/ChatContext";
import ChatMessageCSS from "./ChatMessage.module.css";

function ChatMessage({ message }) {
  const { user } = useUser();
  const { data } = useContext(ChatContext);
  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView();
  }, [message]);

  return (
    <div
      className={`${ChatMessageCSS["message"]} ${ChatMessageCSS["curr-user"]}`}
    >
      <div className={ChatMessageCSS["message-info"]}>
        <img src={data.user.photoUrl} alt="" />
      </div>
      <div className={ChatMessageCSS["message-content"]}>
        <div className={ChatMessageCSS["message-text-container"]}>
          <p className={ChatMessageCSS["message-text"]}>cum</p>
          <p className={ChatMessageCSS["message-time"]}>Just now</p>
        </div>
      </div>
      <div ref={ref}></div>
    </div>
  );
}

export default ChatMessage;
