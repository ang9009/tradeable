import {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { useUser } from "../../../../context/UserContext";
import checkImage from "../../../../utils/checkImage";
import { ChatContext } from "../../context/ChatContext";
import ChatMessageCSS from "./ChatMessage.module.css";

function ChatMessage({ message }) {
  const { user } = useUser();
  const { data } = useContext(ChatContext);
  const [userPhoto, setUserPhoto] = useState(
    require("../../../../assets/profile_placeholder.png")
  );

  const ref = useRef();

  useLayoutEffect(() => {
    ref.current?.scrollIntoView();
  }, [message]);

  useEffect(() => {
    const userPhotoUrl = `https://storage.googleapis.com/tradeable-6ed31.appspot.com/profileImages/${data.user.id}`;

    checkImage(userPhotoUrl).then((userPhotoExists) => {
      if (userPhotoExists) {
        setUserPhoto(userPhotoUrl);
      }
    });
  }, []);

  return (
    <div
      className={`${ChatMessageCSS["message"]} ${
        message.senderId === user.id
          ? ChatMessageCSS["curr-user"]
          : ChatMessageCSS["other-user"]
      }`}
      ref={ref}
    >
      <div className={ChatMessageCSS["message-info"]}>
        <img src={userPhoto} alt="" />
      </div>
      <div className={ChatMessageCSS["message-content"]}>
        <div className={ChatMessageCSS["message-text-container"]}>
          {message.img ? (
            <img
              src={message.img}
              alt=""
              className={ChatMessageCSS["message-img"]}
            />
          ) : (
            <p className={ChatMessageCSS["message-text"]}>{message?.text}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ChatMessage;
