import { FiMessageSquare } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import UserActionsWidgetCSS from "./UserActionsWidget.module.css";

function UserActionsWidget({ changeNav }) {
  const location = useLocation();
  function handleColor() {
    return location.pathname === "/"
      ? changeNav
        ? "black"
        : "white"
      : "black";
  }

  return (
    <div className={UserActionsWidgetCSS["user-actions-widget-container"]}>
      <FiMessageSquare size={"22px"} color={handleColor()} />
    </div>
  );
}

export default UserActionsWidget;
