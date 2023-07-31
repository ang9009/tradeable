import { FiHeart, FiMessageSquare } from "react-icons/fi";
import Button from "../../../../components/ui/Button/Button";
import UserActionsWidgetCSS from "./UserActionsWidget.module.css";
import { Link } from "react-router-dom";

function UserActionsWidget() {
  return (
    <div className={UserActionsWidgetCSS["user-actions-widget-container"]}>
      <Link to="/create-listing">
        <Button type={"gray-outline"} text={"Sell"} />
      </Link>
      <Button text={<FiMessageSquare size={"22px"} />} type={"icon"} />
      <Button text={<FiHeart size={"22px"} />} type={"icon"} />
    </div>
  );
}

export default UserActionsWidget;
