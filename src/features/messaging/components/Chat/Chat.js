import ChatListingInfo from "../ChatListingInfo/ChatListingInfo";
import ChatUser from "../ChatUser/ChatUser";
import ChatCSS from "./Chat.module.css";

function Chat({ selectedChat }) {
  return (
    <div className={ChatCSS["chat-container"]}>
      {selectedChat.length !== 0 ? (
        <>
          <ChatUser userInfo={selectedChat[1].userInfo} />
          <ChatListingInfo listingId={selectedChat[1].listingId} />
        </>
      ) : (
        <div>No chats selected</div>
      )}
    </div>
  );
}

export default Chat;
