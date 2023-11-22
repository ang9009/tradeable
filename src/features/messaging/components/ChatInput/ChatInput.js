import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { useContext, useState } from "react";
import { FiImage } from "react-icons/fi";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { v4 as uuid } from "uuid";
import { useUser } from "../../../../context/UserContext";
import { db, ref, storage } from "../../../../lib/firebase";
import { ChatContext } from "../../context/ChatContext";
import ChatInputCSS from "./ChatInput.module.css";

function ChatInput({ messages, chatData, userInfo }) {
  const [text, setText] = useState("");
  const { user } = useUser();
  const { chatId } = useParams();
  const { data } = useContext(ChatContext);

  // Sends image
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
              senderId: user.id,
              date: Date.now(),
              img: downloadUrl,
            }),
          });
        });
      }
    );

    await updateDoc(doc(db, "userChats", user.id), {
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

    await updateNotificationsData();
  }

  async function handleSendMsg() {
    // Add message to chat object
    await updateDoc(doc(db, "chats", chatId), {
      messages: arrayUnion({
        id: uuid(),
        text,
        senderId: user.id,
        date: Date.now(),
      }),
    });

    // Clear input
    setText("");

    // Update notifications data
    await updateNotificationsData();

    // Update userChats last messages
    await updateDoc(doc(db, "userChats", user.id), {
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

  // !THIS IS WRONG! SHOULD BE UPDATING THE RECIPIENT NAME/ID/EMAIL
  async function updateNotificationsData() {
    await updateDoc(doc(db, "chatNotifications", chatId), {
      ["recipientName"]: userInfo.name,
      ["recipientId"]: userInfo.id,
      ["recipientEmail"]: userInfo.email,
    });
  }

  return (
    <div className={ChatInputCSS["component-container"]}>
      {/* Input */}
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
          accept="image/png, image/jpeg"
          style={{ display: "none" }}
          id="file"
          onInput={async (e) => {
            // Image input doesn't allow the same img to be uploaded again by default, so use onInput
            if (e.target.files[0] && e.target.files[0].size > 5000000) {
              toast.error("Please upload files that are under 5MB", {
                theme: "colored",
                autoClose: 3000,
              });
            } else if (e.target.files[0]) {
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
