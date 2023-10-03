import {
  Timestamp,
  arrayUnion,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { useContext, useState } from "react";
import { FiImage } from "react-icons/fi";
import { useParams } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { useUser } from "../../../../context/UserContext";
import { db, ref, storage } from "../../../../lib/firebase";
import { ChatContext } from "../../context/ChatContext";
import ChatInputCSS from "./ChatInput.module.css";

function ChatInput() {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);

  const { user } = useUser();
  const { chatId } = useParams();
  const { data } = useContext(ChatContext);

  async function handleSend() {
    if (img) {
      const storageRef = ref(storage, uuid());
      const uploadTask = uploadBytesResumable(storageRef, img);
      uploadTask.on(
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadUrl) => {
            await updateDoc(doc(db, "chats", chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: user.uid,
                date: Timestamp.now(),
                img: downloadUrl,
              }),
            });
          });
        }
      );
    } else {
      await updateDoc(doc(db, "chats", chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: user.uid,
          date: Timestamp.now(),
        }),
      });
    }

    await updateDoc(doc(db, "userChats", user.uid), {
      [chatId + ".lastMessage"]: {
        text,
      },
      [chatId + ".date"]: serverTimestamp(),
    });

    await updateDoc(doc(db, "userChats", data.user.id), {
      [chatId + ".lastMessage"]: {
        text,
      },
      [chatId + ".date"]: serverTimestamp(),
    });

    setText("");
    setImg(null);
  }

  return (
    <div className={ChatInputCSS["input-container"]}>
      <input
        type="text"
        className={ChatInputCSS["text-input"]}
        placeholder="Type here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={async (e) => {
          e.key === "Enter" && text.length !== 0 && (await handleSend());
        }}
      />
      <input type="file" style={{ display: "none" }} id="file" />
      <label
        htmlFor="file"
        onChange={(e) => {
          setImg(e.target.files[0]);
          console.log(img);
        }}
      >
        <FiImage
          size={"25px"}
          color={"var(--secondary-text-color)"}
          className={ChatInputCSS["image-btn"]}
        />
      </label>
    </div>
  );
}

export default ChatInput;
