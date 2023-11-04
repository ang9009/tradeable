import { FiMessageSquare } from "react-icons/fi";
import ChatInput from "../ChatInput/ChatInput";
import ChatListingInfo from "../ChatListingInfo/ChatListingInfo";
import ChatMessages from "../ChatMessages/ChatMessages";
import ChatUser from "../ChatUser/ChatUser";
import ChatCSS from "./Chat.module.css";

function Chat({
  selectedChat,
  listingData: { listings, isFetchingListings },
  messages,
}) {
  return (
    <div className={ChatCSS["chat-container"]}>
      {selectedChat.length !== 0 ? (
        <>
          <ChatUser selectedChat={selectedChat} />
          <ChatListingInfo
            listing={listings?.find(
              (listing) => listing && listing.id === selectedChat[1]?.listing.id
            )}
            selectedChat={selectedChat}
            isFetchingListing={isFetchingListings}
          />
          <ChatMessages messages={messages} />
          <ChatInput messages={messages} />
        </>
      ) : (
        <div className={ChatCSS["no-chats-msg-container"]}>
          <div className={ChatCSS["no-chats-msg"]}>
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

export default Chat;
