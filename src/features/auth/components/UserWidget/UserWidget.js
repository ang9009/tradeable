import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import { useUser } from "../../../../context/UserContext";
import { auth } from "../../../../lib/firebase";
import UserWidgetCSS from "./UserWidget.module.css";

function UserWidget({ changeNav }) {
  const [showMenu, setShowMenu] = useState(false);
  const { user } = useUser();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <DropdownMenu.Root modal={false} open={showMenu}>
      <DropdownMenu.Trigger
        className={UserWidgetCSS["widget-container"]}
        onMouseEnter={() => setShowMenu(true)}
        onMouseLeave={() => setShowMenu(false)}
        onClick={() => setShowMenu(false)}
        style={{
          color:
            location.pathname === "/"
              ? changeNav
                ? "black"
                : "white"
              : "black",
        }}
      >
        <img src={user.photoURL} alt="" />
        <div className={UserWidgetCSS.username}>{user.displayName}</div>
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
            border:
              location.pathname === "/"
                ? changeNav
                  ? "var(--primary-border)"
                  : "1px solid #fff"
                : "var(--primary-border)",
          }}
          onMouseOver={() => setShowMenu(true)}
          onMouseLeave={() => setShowMenu(false)}
          align={"end"}
        >
          <DropdownMenu.Item
            className={UserWidgetCSS["select-item"]}
            onClick={() => {
              setShowMenu(false);
              navigate(`/profile/${user.uid}`);
            }}
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
