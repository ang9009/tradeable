import ChatsListItem from "../ChatsListItem/ChatsListItem";
import ChatsListTabs from "./../ChatsListTabs/ChatsListTabs";
import ChatsListCSS from "./ChatsList.module.css";

function ChatsList() {
  return (
    <div className={ChatsListCSS["chat-list-container"]}>
      <ChatsListTabs />
      <ChatsListItem />
    </div>
  );
}

export default ChatsList;
