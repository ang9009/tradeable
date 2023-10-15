import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useUser } from "../../../../context/UserContext";
import getChatId from "../../../../utils/getChatId";
import { ChatContext } from "../../context/ChatContext";
import ChatsListItem from "../ChatsListItem/ChatsListItem";
import ChatsListCSS from "./ChatsList.module.css";

function ChatsList({
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
    <div className={ChatsListCSS["chat-list-container"]}>
      {/* chat[0] is the id, chat[1] holds chat info */}
      {listings.length !== 0 &&
        userChats.map((chat, i) => (
          <ChatsListItem
            selectedChat={selectedChat}
            chat={chat}
            listingData={{
              // Listing could be null if deleted
              listing: listings.find(
                (listing) => listing && listing.id === chat[1].listingId
              ),
              isFetchingListings: isFetchingListings,
            }}
            key={chat[0]}
            onClick={() =>
              handleSelect(
                chat[1].userInfo,
                listings.find(
                  (listing) => listing && listing.id === chat[1].listingId
                )
              )
            }
          />
        ))}
      {userChats.length === 0 && (
        <div className={ChatsListCSS["no-chats-msg"]}>
          <p>Chats will appear here</p>
        </div>
      )}
    </div>
  );
}

export default ChatsList;
