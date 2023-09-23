import { FiMessageSquare } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import UserActionsWidgetCSS from "./UserActionsWidget.module.css";

function UserActionsWidget({ changeNav }) {
  const location = useLocation();
  const navigate = useNavigate();
  function handleColor() {
    return location.pathname === "/"
      ? changeNav
        ? "black"
        : "white"
      : "black";
  }

  return (
    <div className={UserActionsWidgetCSS["user-actions-widget-container"]}>
      <FiMessageSquare
        size={"24px"}
        color={handleColor()}
        className={UserActionsWidgetCSS["message-btn"]}
        onClick={() => navigate("/messages")}
      />
    </div>
  );
}

export default UserActionsWidget;
