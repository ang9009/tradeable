import { FiHeart, FiMessageSquare } from "react-icons/fi";
import Button from "../../../../components/ui/Button/Button";
import UserActionsWidgetCSS from "./UserActionsWidget.module.css";

// text={<FiMessageSquare size={"22px"} />} type={"icon"}

function UserActionsWidget() {
  return (
    <div className={UserActionsWidgetCSS["user-actions-widget-container"]}>
      <Button
        options={{ text: <FiMessageSquare size={"22px"} />, type: "icon" }}
      />
      <Button options={{ text: <FiHeart size={"22px"} />, type: "icon" }} />
    </div>
  );
}

export default UserActionsWidget;
