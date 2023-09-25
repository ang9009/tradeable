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
      });

      return () => unsub();
    }

    user.uid && getChats();
  }, [user.uid]);

  // Updates the selected chat for the Chat component
  // useEffect(() => {
  //   const filteredChats = userChats.filter((chat) => chat[1].type === tab);
  //   setSelectedChat(filteredChats[0]);
  // }, [tab]);

  return (
    <div className={MessagesCSS["components-container"]}>
      <ChatsList
        userChats={userChats}
        selectedChatData={{ selectedChat, setSelectedChat }}
        tabData={{ tab, setTab }}
      />
      <Chat selectedChat={selectedChat} />
    </div>
  );
}

export default Messages;
