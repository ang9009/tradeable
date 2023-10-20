import { FiMessageSquare } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import ChatInput from "../ChatInput/ChatInput";
import ChatListingInfo from "../ChatListingInfo/ChatListingInfo";
import ChatMessages from "../ChatMessages/ChatMessages";
import ChatUser from "../ChatUser/ChatUser";
import MobileChatCSS from "./MobileChat.module.css";

function MobileChat({
  selectedChat,
  listingData: { listings, isFetchingListings },
}) {
  const navigate = useNavigate();

  return (
    <div className={MobileChatCSS["chat-container"]}>
      {selectedChat?.length !== 0 && !isFetchingListings ? (
        <>
          <ChatUser selectedChat={selectedChat} />
          <ChatListingInfo
            listing={listings?.find(
              (listing) =>
                listing && listing?.id === selectedChat[1]?.listing.id
            )}
            isFetchingListing={isFetchingListings}
          />
          <ChatMessages />
          <ChatInput />
        </>
      ) : (
        <div className={MobileChatCSS["no-chats-msg-container"]}>
          <div className={MobileChatCSS["no-chats-msg"]}>
            <FiMessageSquare
              color={"var(--secondary-text-color"}
              size={"50px"}
            />
            <h1>Your messages</h1>
            <p>Chat with buyers and sellers here</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default MobileChat;
