import { useUser } from "../../../../context/UserContext";
import UserWidgetCSS from "./UserWidget.module.css";
import { FiChevronDown } from "react-icons/fi";
import * as Select from "@radix-ui/react-select";
import { auth } from "../../../../lib/firebase";

function UserWidget() {
  const user = useUser();

  return (
    <Select.Root value={option} onValueChange={setOption}>
      {/* The user widget you click on */}
      <Select.Trigger className={UserWidgetCSS["widget-container"]}>
        <img src={user.photoURL} alt="" />
        <div className={UserWidgetCSS.username}>{user.displayName}</div>
        <Select.Icon className={UserWidgetCSS["down-chevron"]}>
          <FiChevronDown />
        </Select.Icon>
      </Select.Trigger>
      {/* The dropdown menu */}
      <Select.Content className={UserWidgetCSS["select-menu"]}>
        <Select.Viewport className={UserWidgetCSS["select-content"]}>
          <Select.Item className={UserWidgetCSS["select-item"]}>
            Profile
          </Select.Item>
          <Select.Item className={UserWidgetCSS["select-item"]}>
            Settings
          </Select.Item>
          <Select.Item className={UserWidgetCSS["select-item"]}>
            Messages
          </Select.Item>
          <Select.Item className={UserWidgetCSS["select-item"]}>
            Favorites
          </Select.Item>
          <Select.Separator className={UserWidgetCSS["select-separator"]} />
          <Select.Item
            className={UserWidgetCSS["select-item"]}
            onClick={() => console.log("test")}
          >
            Sign out
          </Select.Item>
        </Select.Viewport>
      </Select.Content>
    </Select.Root>
  );
}

export default UserWidget;
