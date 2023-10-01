import { useNavigate } from "react-router-dom";
import ChatsListItem from "../ChatsListItem/ChatsListItem";
import ChatsListCSS from "./ChatsList.module.css";

function ChatsList({
  userChats,
  selectedChatData: { selectedChat, setSelectedChat },
  listingData: { listings, isFetchingListings },
}) {
  const navigate = useNavigate();

  return (
    <div className={ChatsListCSS["chat-list-container"]}>
      {/* chat[0] is the id, chat[1] holds chat info */}
      {userChats &&
        listings &&
        userChats.map((chat, i) => (
          <ChatsListItem
            selectedChat={selectedChat}
            chat={chat}
            listingData={{
              listing: listings[i],
              isFetchingListings: isFetchingListings,
            }}
            key={chat[0]}
            onClick={() => navigate(`/messages/${listings[i].id}`)}
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
