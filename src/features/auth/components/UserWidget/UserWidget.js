import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import { useUser } from "../../../../context/UserContext";
import { auth } from "../../../../lib/firebase";
import UserWidgetCSS from "./UserWidget.module.css";

function UserWidget() {
  const [showMenu, setShowMenu] = useState(false);
  const { user, isFetchingUser } = useUser();
  const navigate = useNavigate();
  const location = useLocation();

  function goToPage(page) {
    setShowMenu(false);
    navigate(page);
  }

  return (
    <DropdownMenu.Root modal={false} open={showMenu}>
      <DropdownMenu.Trigger
        className={UserWidgetCSS["widget-container"]}
        onMouseEnter={() => setShowMenu(true)}
        onMouseLeave={() => setShowMenu(false)}
        onClick={() => setShowMenu(false)}
        style={{
          color: "black",
        }}
      >
        <img
          src={
            user.photoUrl ||
            require("../../../../assets/profile_placeholder.png")
          }
          alt={require("../../../../assets/placeholder_img.jpg")}
        />
        <div className={UserWidgetCSS.username}>{user.name}</div>
        <FiChevronDown
          className={`${UserWidgetCSS["down-chevron"]} ${
            showMenu && UserWidgetCSS["down-chevron-flip"]
          }`}
        />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className={UserWidgetCSS["select-menu"]}
          style={{
            border: "var(--primary-border)",
          }}
          onMouseOver={() => setShowMenu(true)}
          onMouseLeave={() => setShowMenu(false)}
          align={"end"}
        >
          <DropdownMenu.Item
            className={UserWidgetCSS["select-item"]}
            onClick={() => goToPage(`/profile/${user.id}`)}
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
            onClick={() => goToPage("/create-listing")}
          >
            Create listing
          </DropdownMenu.Item>
          <DropdownMenu.Item
            className={UserWidgetCSS["select-item"]}
            onClick={() => goToPage("/messages")}
          >
            Messages
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
