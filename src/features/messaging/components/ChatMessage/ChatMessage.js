import ChatMessageCSS from "./ChatMessage.module.css";

function ChatMessage() {
  return (
    <div
      className={`${ChatMessageCSS["message"]} ${ChatMessageCSS["curr-user"]}`}
    >
      <div className={ChatMessageCSS["message-info"]}>
        <img src={require("../../../../assets/placeholder_img.jpg")} alt="" />
      </div>
      <div className={ChatMessageCSS["message-content"]}>
        <div className={ChatMessageCSS["message-text-container"]}>
          <p className={ChatMessageCSS["message-text"]}>cum</p>
          <p className={ChatMessageCSS["message-time"]}>Just now</p>
        </div>

        {/* <img src={require("../../../../assets/placeholder_img.jpg")} alt="" /> */}
      </div>
    </div>
  );
}

export default ChatMessage;
