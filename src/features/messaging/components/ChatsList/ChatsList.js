import ChatsListItem from "../ChatsListItem/ChatsListItem";
import ChatsListTabs from "./../ChatsListTabs/ChatsListTabs";
import ChatsListCSS from "./ChatsList.module.css";

function ChatsList({ userChats, setSelectedChat, tab, setTab }) {
  return (
    <div className={ChatsListCSS["chat-list-container"]}>
      <ChatsListTabs tab={tab} setTab={setTab} />
      {/* chat[0] is the id, chat[1] holds chat info */}
      {userChats &&
        userChats.map((chat, i) => (
          <ChatsListItem
            chat={chat}
            key={chat[0]}
            onClick={() => setSelectedChat(chat)}
          />
        ))}
    </div>
  );
}

export default ChatsList;
