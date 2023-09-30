import ChatMessageCSS from "./ChatMessage.module.css";

function ChatMessage() {
  return (
    <div className={ChatMessageCSS["message"]}>
      <div className={ChatMessageCSS["message-info"]}>
        <img src={require("../../../../assets/placeholder_img.jpg")} alt="" />
        <span>Just now</span>
      </div>
      <div className={ChatMessageCSS["message-content"]}>
        <p>Hello</p>
        {/* <img src={require("../../../../assets/placeholder_img.jpg")} alt="" /> */}
      </div>
    </div>
  );
}

export default ChatMessage;
