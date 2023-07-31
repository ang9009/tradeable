import { useUser, useUserUpdate } from "../../../../context/UserContext";
import UserWidgetCSS from "./UserWidget.module.css";

function UserWidget() {
  const user = useUser();

  return (
    <div className={UserWidgetCSS["widget-container"]}>
      <img src={user.photoURL} alt="" />
      <div className={UserWidgetCSS.username}>{user.displayName}</div>
    </div>
  );
}

export default UserWidget;
