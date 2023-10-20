import { useContext, useEffect } from "react";
import { FiMessageSquare } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useUser } from "../../../../context/UserContext";
import getChatId from "../../../../utils/getChatId";
import { ChatContext } from "../../context/ChatContext";
import ChatsListItem from "../ChatsListItem/ChatsListItem";
import MobileChatsListCSS from "./MobileChatsList.module.css";

function MobileChatsList({
  userChats,
  selectedChat,
  listingData: { listings, isFetchingListings },
}) {
  const navigate = useNavigate();
  const { user } = useUser();
  const { dispatch } = useContext(ChatContext);
  function handleSelect(otherUser, listing) {
    if (listing) {
      const chatId = getChatId(user.id, otherUser.id, listing.id);
      navigate(`/messages/${chatId}`);
    } else {
      toast.error("Listing no longer exists!", 2000);
    }
  }

  // Updates seller chat info
  useEffect(() => {
    if (selectedChat.length !== 0) {
      dispatch({ type: "CHANGE_USER", payload: selectedChat[1].userInfo });
    }
  }, [selectedChat]);

  return (
    <div className={MobileChatsListCSS["chat-list-container"]}>
      {userChats.length !== 0 && (
        <>
          <h1 className={MobileChatsListCSS["msgs-title"]}>Messages</h1>
          <div className={MobileChatsListCSS["divider"]}></div>
        </>
      )}
      {/* chat[0] is the id, chat[1] holds chat info */}
      {listings.length !== 0 &&
        userChats.map((chat, i) => (
          <ChatsListItem
            selectedChat={selectedChat}
            chat={chat}
            listingData={{
              // Listing could be null if deleted
              listing: listings.find(
                (listing) => listing && listing.id === chat[1].listing.id
              ),
              isFetchingListings: isFetchingListings,
            }}
            key={chat[0]}
            onClick={() =>
              handleSelect(
                chat[1].userInfo,
                listings.find(
                  (listing) => listing && listing.id === chat[1].listing.id
                )
              )
            }
          />
        ))}
      {userChats.length === 0 && (
        <div className={MobileChatsListCSS["no-chats-msg-container"]}>
          <div className={MobileChatsListCSS["no-chats-msg"]}>
            <FiMessageSquare
              color={"var(--secondary-text-color"}
              size={"50px"}
            />
            <h1>No messages found</h1>
            <p>Chat with buyers and sellers here</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default MobileChatsList;
