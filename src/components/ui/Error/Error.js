import { FiAlertOctagon } from "react-icons/fi";
import ErrorCSS from "./Error.module.css";

function Error({ message, show, className, alertIconClassName }) {
  return (
    <>
      {show && (
        <div className={`${ErrorCSS["error-msg"]} ${className}`}>
          <FiAlertOctagon size={"20px"} className={alertIconClassName} />
          <p>{message}</p>
        </div>
      )}
    </>
  );
}

export default Error;
