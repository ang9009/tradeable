import { useUser } from "../../../../context/UserContext";
import UserWidgetCSS from "./UserWidget.module.css";
import { AiFillCaretDown } from "react-icons/ai";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { auth } from "../../../../lib/firebase";

function UserWidget() {
  const user = useUser();

  return (
    <DropdownMenu.Root>
      {/* The user widget you click on */}
      <DropdownMenu.Trigger className={UserWidgetCSS["widget-container"]}>
        <img src={user.photoURL} alt="" />
        <div className={UserWidgetCSS.username}>{user.displayName}</div>
        <div className={UserWidgetCSS["down-chevron"]}>
          <AiFillCaretDown size={"12px"} />
        </div>
      </DropdownMenu.Trigger>
      {/* The dropdown menu */}
      <DropdownMenu.Content className={UserWidgetCSS["select-menu"]}>
        <DropdownMenu.Item className={UserWidgetCSS["select-item"]}>
          Profile
        </DropdownMenu.Item>
        <DropdownMenu.Item className={UserWidgetCSS["select-item"]}>
          Settings
        </DropdownMenu.Item>
        <DropdownMenu.Item className={UserWidgetCSS["select-item"]}>
          Create listing
        </DropdownMenu.Item>
        <DropdownMenu.Item className={UserWidgetCSS["select-item"]}>
          Messages
        </DropdownMenu.Item>
        <DropdownMenu.Item className={UserWidgetCSS["select-item"]}>
          Favorites
        </DropdownMenu.Item>
        <DropdownMenu.Separator className={UserWidgetCSS["select-separator"]} />
        <DropdownMenu.Item
          className={UserWidgetCSS["select-item"]}
          onSelect={() => auth.signOut()}
        >
          Sign out
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}

export default UserWidget;
