import { useNavigate } from "react-router-dom";
import { useUser } from "../../../../context/UserContext";
import getChatId from "../../../../utils/getChatId";
import ChatsListItem from "../ChatsListItem/ChatsListItem";
import ChatsListCSS from "./ChatsList.module.css";

function ChatsList({
  userChats,
  selectedChatData: { selectedChat, setSelectedChat },
  listingData: { listings, isFetchingListings },
}) {
  const navigate = useNavigate();
  const { user } = useUser();

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
            onClick={() => {
              const chatId = getChatId(
                user.uid,
                chat[1].userInfo.id,
                listings[i].id
              );
              navigate(`/messages/${chatId}`);
            }}
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
