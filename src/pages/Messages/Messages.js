import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import { Chat, ChatsList } from "../../features/messaging";
import ChatContextProvider from "../../features/messaging/context/ChatContext";
import { db, getChatListings } from "../../lib/firebase";
import MessagesCSS from "./Messages.module.css";

function Messages() {
  const [userChats, setUserChats] = useState([]);
  const [listings, setListings] = useState([]);
  const [isFetchingListings, setIsFetchingListings] = useState(true);
  const [selectedChat, setSelectedChat] = useState([]);
  const { user } = useUser();
  const { chatId } = useParams();

  // Fetches chats
  useEffect(() => {
    function getChats() {
      const unsub = onSnapshot(doc(db, "userChats", user.uid), (doc) => {
        const userChats = Object.entries(doc.data()).sort(
          (a, b) => b[1]?.date?.seconds - a[1]?.date?.seconds
        );

        setUserChats(userChats);
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

  // Updates selected chat based on chatId
  useEffect(() => {
    if (userChats.length !== 0 && chatId && chatId.length !== 0) {
      const selectedChat = userChats.find((chat) => chat[0] === chatId);
      selectedChat && setSelectedChat(selectedChat);
    } else {
      setSelectedChat([]);
    }
  }, [chatId, userChats]);

  return (
    <ChatContextProvider>
      <div className={MessagesCSS["components-container"]}>
        <ChatsList
          userChats={userChats}
          selectedChat={selectedChat}
          listingData={{ listings, isFetchingListings }}
        />
        <Chat
          selectedChat={selectedChat}
          listingData={{ listings, isFetchingListings }}
        />
      </div>
    </ChatContextProvider>
  );
}

export default Messages;
