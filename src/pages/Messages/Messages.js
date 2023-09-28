import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useUser } from "../../context/UserContext";
import { Chat, ChatsList } from "../../features/messaging";
import { db, getChatListings } from "../../lib/firebase";
import MessagesCSS from "./Messages.module.css";

function Messages() {
  const [userChats, setUserChats] = useState([]);
  const [listings, setListings] = useState([]);
  const [isFetchingListings, setIsFetchingListings] = useState(true);
  const [selectedChat, setSelectedChat] = useState([]);
  const { user } = useUser();

  // Fetches chats
  useEffect(() => {
    function getChats() {
      const unsub = onSnapshot(doc(db, "userChats", user.uid), (doc) => {
        setUserChats(Object.entries(doc.data()));
      });

      return () => unsub();
    }

    user.uid && getChats(userChats);
  }, [user.uid]);

  // Fetches listings and their images
  useEffect(() => {
    if (userChats.length !== 0) {
      getChatListings(userChats).then((chatListings) => {
        setListings(chatListings);
        setIsFetchingListings(false);
      });
    }
  }, [userChats]);

  return (
    <div className={MessagesCSS["components-container"]}>
      <ChatsList
        userChats={userChats}
        selectedChatData={{ selectedChat, setSelectedChat }}
        listingData={{ listings, isFetchingListings }}
      />
      <Chat
        selectedChat={selectedChat}
        listingData={{ listings, isFetchingListings }}
      />
    </div>
  );
}

export default Messages;
