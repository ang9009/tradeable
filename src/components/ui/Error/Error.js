import ErrorCSS from "./Error.module.css";
import { FiAlertOctagon } from "react-icons/fi";

function Error({ message }) {
  return (
    <div className={ErrorCSS["error-msg"]}>
      <FiAlertOctagon size={"20px"} />
      <p>{message}</p>
    </div>
  );
}

export default Error;
