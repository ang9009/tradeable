import ChatsListItem from "../ChatsListItem/ChatsListItem";
import ChatsListTabs from "./../ChatsListTabs/ChatsListTabs";
import ChatsListCSS from "./ChatsList.module.css";

function ChatsList({
  userChats,
  selectedChatData: { selectedChat, setSelectedChat },
  tabData: { tab, setTab },
}) {
  return (
    <div className={ChatsListCSS["chat-list-container"]}>
      <ChatsListTabs
        tab={tab}
        setTab={setTab}
        setSelectedChat={setSelectedChat}
      />
      {/* chat[0] is the id, chat[1] holds chat info */}
      {userChats &&
        userChats
          .filter((chat) => chat[1].type === tab)
          .map((chat) => (
            <ChatsListItem
              selectedChat={selectedChat}
              chat={chat}
              key={chat[0]}
              onClick={() => setSelectedChat(chat)}
            />
          ))}
    </div>
  );
}

export default ChatsList;
