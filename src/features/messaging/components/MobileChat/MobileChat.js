import { FiMessageSquare } from "react-icons/fi";
import ChatInput from "../ChatInput/ChatInput";
import ChatMessages from "../ChatMessages/ChatMessages";
import ChatUser from "../ChatUser/ChatUser";
import MobileChatListingInfo from "../MobileChatListingInfo/MobileChatListingInfo";
import MobileChatCSS from "./MobileChat.module.css";

function MobileChat({
  selectedChat,
  listingData: { listings, isFetchingListings },
}) {
  console.log(selectedChat);

  return (
    <div className={MobileChatCSS["chat-container"]}>
      {selectedChat?.length !== 0 && !isFetchingListings ? (
        <>
          <ChatUser selectedChat={selectedChat} />
          <MobileChatListingInfo
            listing={listings?.find(
              (listing) =>
                listing && listing?.id === selectedChat[1]?.listing.id
            )}
            isFetchingListing={isFetchingListings}
            selectedChat={selectedChat}
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
