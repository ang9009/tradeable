import { FiAlertOctagon } from "react-icons/fi";
import InputMessageCSS from "./InputMessage.module.css";

function InputMessage({ message, isError, className }) {
  // For this component to work as intended, its container must have position relative

  return (
    <div
      className={`${InputMessageCSS["input-message"]} ${className}`}
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
