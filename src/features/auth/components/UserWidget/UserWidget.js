import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../../../context/UserContext";
import { auth } from "../../../../lib/firebase";
import UserWidgetCSS from "./UserWidget.module.css";

function UserWidget() {
  const [showMenu, setShowMenu] = useState(false);
  const { user } = useUser();
  const navigate = useNavigate();

  return (
    <DropdownMenu.Root modal={false} open={showMenu}>
      <DropdownMenu.Trigger
        className={UserWidgetCSS["widget-container"]}
        onMouseEnter={() => setShowMenu(true)}
        onMouseLeave={() => setShowMenu(false)}
        onClick={() => setShowMenu(false)}
      >
        <img src={user.photoURL} alt="" />
        {/* <div className={UserWidgetCSS.username}>{user.displayName}</div>
        <div className={UserWidgetCSS["down-chevron"]}>
          <FiChevronDown size={"15px"} />
        </div> */}
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className={UserWidgetCSS["select-menu"]}
          onMouseOver={() => setShowMenu(true)}
          onMouseLeave={() => setShowMenu(false)}
          align={"end"}
        >
          <DropdownMenu.Item
            className={UserWidgetCSS["select-item"]}
            onClick={() => setShowMenu(false)}
          >
            Profile
          </DropdownMenu.Item>
          <DropdownMenu.Item
            className={UserWidgetCSS["select-item"]}
            onClick={() => setShowMenu(false)}
          >
            Settings
          </DropdownMenu.Item>
          <DropdownMenu.Item
            className={UserWidgetCSS["select-item"]}
            onSelect={() => navigate("/create-listing")}
            onClick={() => setShowMenu(false)}
          >
            Create listing
          </DropdownMenu.Item>
          <DropdownMenu.Item
            className={UserWidgetCSS["select-item"]}
            onClick={() => setShowMenu(false)}
          >
            Messages
          </DropdownMenu.Item>
          <DropdownMenu.Item
            className={UserWidgetCSS["select-item"]}
            onClick={() => setShowMenu(false)}
          >
            Favorites
          </DropdownMenu.Item>
          <DropdownMenu.Separator
            className={UserWidgetCSS["select-separator"]}
          />
          <DropdownMenu.Item
            className={UserWidgetCSS["select-item"]}
            onClick={() => setShowMenu(false)}
            onSelect={() => auth.signOut()}
          >
            Sign out
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

export default UserWidget;
