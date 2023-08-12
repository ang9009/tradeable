import { FiHeart, FiMessageSquare } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import Button from "../../../../components/ui/Button/Button";
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
      <Button
        options={{
          text: <FiMessageSquare size={"22px"} color={handleColor()} />,
          type: "icon",
        }}
      />
      <Button
        options={{
          text: <FiHeart size={"22px"} color={handleColor()} />,
          type: "icon",
        }}
      />
    </div>
  );
}

export default UserActionsWidget;
