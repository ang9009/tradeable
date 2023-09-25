import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useUser } from "../../context/UserContext";
import { Chat, ChatsList } from "../../features/messaging";
import { db } from "../../lib/firebase";
import MessagesCSS from "./Messages.module.css";

function Messages() {
  const [userChats, setUserChats] = useState([]);
  const [selectedChat, setSelectedChat] = useState([]);
  const [tab, setTab] = useState("buying");
  const { user } = useUser();

  // Fetches chats
  useEffect(() => {
    function getChats() {
      const unsub = onSnapshot(doc(db, "userChats", user.uid), (doc) => {
        setUserChats(Object.entries(doc.data()));

        if (Object.keys(doc.data()).length !== 0) {
          setSelectedChat(Object.entries(doc.data())[0]);
        }
      });

      return () => unsub();
    }

    user.uid && getChats();
  }, [user.uid]);

  return (
    <div className={MessagesCSS["components-container"]}>
      <ChatsList
        userChats={userChats}
        setSelectedChat={setSelectedChat}
        tab={tab}
        setTab={setTab}
      />
      <Chat selectedChat={selectedChat} />
    </div>
  );
}

export default Messages;
