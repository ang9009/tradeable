import InputMessageCSS from "./InputMessage.module.css";
import { FiAlertOctagon } from "react-icons/fi";

function InputMessage({ message, isError }) {
  // For this component to work as intended, its container must have position relative

  return (
    <div
      className={InputMessageCSS["input-message"]}
      style={{
        color: isError ? "var(--warning-red)" : "var(--secondary-text-color)",
      }}
    >
      {isError && message && (
        <FiAlertOctagon className={InputMessageCSS["error-icon"]} />
      )}
      {message}
    </div>
  );
}

export default InputMessage;
