import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { useContext, useRef, useState } from "react";
import { FiImage, FiTrash } from "react-icons/fi";
import { useParams } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { useUser } from "../../../../context/UserContext";
import { db, ref, storage } from "../../../../lib/firebase";
import { ChatContext } from "../../context/ChatContext";
import ChatInputCSS from "./ChatInput.module.css";

function ChatInput() {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);

  const { user } = useUser();
  const { chatId } = useParams();
  const { data } = useContext(ChatContext);
  const imgInputRef = useRef();

  async function handleSend() {
    if (img) {
      const storageRef = ref(storage, `chats/${uuid()}`);
      const uploadTask = uploadBytesResumable(storageRef, img);
      uploadTask.on(
        "state_changed",
        (snapshot) => {},
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
                date: Date.now(),
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
          date: Date.now(),
        }),
      });
    }

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

    setText("");
    setImg(null);
  }

  return (
    <div className={ChatInputCSS["component-container"]}>
      <div
        className={ChatInputCSS["img-preview-container"]}
        style={{ display: !img && "none" }}
      >
        <div
          className={ChatInputCSS["img-preview"]}
          style={
            img && {
              background: `url("${imgUrl}") 0% 0% / cover`,
            }
          }
        >
          <span
            className={ChatInputCSS["delete-btn"]}
            onClick={() => setImg(null)}
          >
            <FiTrash />
          </span>
        </div>
      </div>
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
        <input
          type="file"
          style={{ display: "none" }}
          id="file"
          ref={imgInputRef}
          onInput={(e) => {
            // Image input doesn't allow the same img to be uploaded again by default
            if (e.target.files[0]) {
              setImg(e.target.files[0]);
              setImgUrl(URL.createObjectURL(e.target.files[0]));
            }

            imgInputRef.current.value = "";
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
