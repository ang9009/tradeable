import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import { Chat, ChatsList } from "../../features/messaging";
import MobileChat from "../../features/messaging/components/MobileChat/MobileChat";
import MobileChatsList from "../../features/messaging/components/MobileChatsList/MobileChatsList";
import ChatContextProvider from "../../features/messaging/context/ChatContext";
import { db, getChatListings } from "../../lib/firebase";
import MessagesCSS from "./Messages.module.css";

function Messages() {
  const [userChats, setUserChats] = useState([]);
  const userChatsRef = useRef(userChats);

  function setUserChatsState(userChats) {
    userChatsRef.current = userChats;
    setUserChats(userChats);
  }

  const [listings, setListings] = useState([]);
  const [isFetchingListings, setIsFetchingListings] = useState(true);
  const [selectedChat, setSelectedChat] = useState([]);
  const { user } = useUser();
  const { chatId } = useParams();

  // Fetches chats
  useEffect(() => {
    function getChats() {
      const unsub = onSnapshot(doc(db, "userChats", user.id), (doc) => {
        const newUserChats = Object.entries(doc.data()).sort(
          (a, b) => b[1]?.date - a[1]?.date
        );

        // Refetches listings if a new chat is created while the user has the chat window open
        if (newUserChats.length > userChatsRef.current.length) {
          setIsFetchingListings(true);

          getChatListings(newUserChats).then((chatListings) => {
            setListings(chatListings);
            setIsFetchingListings(false);
          });
        }

        // Updates the ref and the state. This is necessary, since listeners cannot access latest state
        setUserChatsState(newUserChats);
      });

      return () => unsub();
    }

    user.id && getChats(userChats);
  }, [user.id]);

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
      {/* Web chat components */}
      <div
        className={`${MessagesCSS["components-container"]} ${MessagesCSS["web"]}`}
      >
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
      {/* Mobile chat components */}
      <div
        className={`${MessagesCSS["components-container"]} ${MessagesCSS["mobile"]}`}
      >
        {chatId ? (
          <MobileChat
            selectedChat={selectedChat}
            listingData={{ listings, isFetchingListings }}
          />
        ) : (
          <MobileChatsList
            userChats={userChats}
            selectedChat={selectedChat}
            listingData={{ listings, isFetchingListings }}
          />
        )}
      </div>
    </ChatContextProvider>
  );
}

export default Messages;
