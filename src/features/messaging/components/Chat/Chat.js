import { FiMessageSquare } from "react-icons/fi";
import ChatListingInfo from "../ChatListingInfo/ChatListingInfo";
import ChatUser from "../ChatUser/ChatUser";
import ChatCSS from "./Chat.module.css";

function Chat({ selectedChat, listingData: { listings, isFetchingListings } }) {
  return (
    <div className={ChatCSS["chat-container"]}>
      {selectedChat.length !== 0 ? (
        <>
          <ChatUser userInfo={selectedChat[1].userInfo} />
          <ChatListingInfo
            listing={
              // TODO: scuffed
              listings.filter(
                (listing) => listing.id === selectedChat[1].listingId
              )[0]
            }
            isFetchingListing={isFetchingListings}
          />
        </>
      ) : (
        <div className={ChatCSS["no-chats-msg-container"]}>
          <div className={ChatCSS["no-chats-msg"]}>
            <FiMessageSquare
              color={"var(--secondary-text-color"}
              size={"30px"}
            />
            <p className={ChatCSS["no-chats-text"]}>
              Select a chat from the left
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chat;
