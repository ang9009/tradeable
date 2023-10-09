import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { useContext, useRef, useState } from "react";
import { FiImage } from "react-icons/fi";
import { useParams } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { useUser } from "../../../../context/UserContext";
import { db, ref, storage } from "../../../../lib/firebase";
import { ChatContext } from "../../context/ChatContext";
import ChatInputCSS from "./ChatInput.module.css";

function ChatInput() {
  const [text, setText] = useState("");
  const { user } = useUser();
  const { chatId } = useParams();
  const { data } = useContext(ChatContext);
  const imgInputRef = useRef();

  async function handleSendImage(img) {
    const storageRef = ref(storage, `chats/${uuid()}`);
    const uploadTask = uploadBytesResumable(storageRef, img);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {},
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadUrl) => {
          await updateDoc(doc(db, "chats", chatId), {
            messages: arrayUnion({
              id: uuid(),
              text: "",
              senderId: user.uid,
              date: Date.now(),
              img: downloadUrl,
            }),
          });
        });
      }
    );

    await updateDoc(doc(db, "userChats", user.uid), {
      [chatId + ".lastMessage"]: {
        text: "[Image]",
      },
      [chatId + ".date"]: Date.now(),
    });

    await updateDoc(doc(db, "userChats", data.user.id), {
      [chatId + ".lastMessage"]: {
        text: "[Image]",
      },
      [chatId + ".date"]: Date.now(),
    });
  }

  async function handleSendMsg() {
    await updateDoc(doc(db, "chats", chatId), {
      messages: arrayUnion({
        id: uuid(),
        text,
        senderId: user.uid,
        date: Date.now(),
      }),
    });

    setText("");

    await updateDoc(doc(db, "userChats", user.uid), {
      [chatId + ".lastMessage"]: {
        text,
      },
      [chatId + ".date"]: Date.now(),
    });

    await updateDoc(doc(db, "userChats", data.user.id), {
      [chatId + ".lastMessage"]: {
        text,
      },
      [chatId + ".date"]: Date.now(),
    });
  }

  return (
    <div className={ChatInputCSS["component-container"]}>
      <div className={ChatInputCSS["input-container"]}>
        <input
          type="text"
          className={ChatInputCSS["text-input"]}
          placeholder="Type here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={async (e) => {
            e.key === "Enter" && text.length !== 0 && (await handleSendMsg());
          }}
        />
        <input
          type="file"
          style={{ display: "none" }}
          id="file"
          ref={imgInputRef}
          onInput={async (e) => {
            // Image input doesn't allow the same img to be uploaded again by default, so use onInput
            if (e.target.files[0]) {
              await handleSendImage(e.target.files[0]);
            }
          }}
        />
        <label htmlFor="file">
          <FiImage
            size={"25px"}
            color={"var(--secondary-text-color)"}
            className={ChatInputCSS["image-btn"]}
          />
        </label>
      </div>
    </div>
  );
}

export default ChatInput;
