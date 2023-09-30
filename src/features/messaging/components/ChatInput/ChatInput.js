import { FiImage } from "react-icons/fi";
import ChatInputCSS from "./ChatInput.module.css";

function ChatInput() {
  return (
    <div className={ChatInputCSS["input-container"]}>
      <input
        type="text"
        className={ChatInputCSS["text-input"]}
        placeholder="Type here..."
      />
      <input type="file" style={{ display: "none" }} id="file" />
      <label htmlFor="file">
        <FiImage
          size={"25px"}
          color={"var(--secondary-text-color)"}
          className={ChatInputCSS["image-btn"]}
        />
      </label>
    </div>
  );
}

export default ChatInput;
