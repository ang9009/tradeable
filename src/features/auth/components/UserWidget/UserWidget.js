import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../../../context/UserContext";
import { auth } from "../../../../lib/firebase";
import checkImage from "../../../../utils/checkImage";
import UserWidgetCSS from "./UserWidget.module.css";

function UserWidget() {
  const [showMenu, setShowMenu] = useState(false);
  const { user, isFetchingUser } = useUser();
  const [userPhoto, setUserPhoto] = useState(
    require("../../../../assets/profile_placeholder.png")
  );
  const navigate = useNavigate();
  useEffect(() => {
    const userPhotoUrl = `https://storage.googleapis.com/tradeable-6ed31.appspot.com/profileImages/${user?.id}`;

    checkImage(userPhotoUrl).then((userPhotoExists) => {
      if (userPhotoExists) {
        setUserPhoto(userPhotoUrl);
      } else {
        setUserPhoto(require("../../../../assets/profile_placeholder.png"));
      }
    });
  }, []);

  function goToPage(page) {
    setShowMenu(false);
    navigate(page);
  }
  return (
    <DropdownMenu.Root modal={false} open={showMenu}>
      <DropdownMenu.Trigger
        className={UserWidgetCSS["widget-container"]}
        onClick={() => setShowMenu((prev) => !prev)}
        style={{
          color: "black",
        }}
      >
        <img
          src={userPhoto}
          alt={require("../../../../assets/placeholder_img.jpg")}
          className={UserWidgetCSS["profile-image"]}
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
            onClick={() => goToPage(`/profile/${user?.id}/listings`)}
          >
            Profile
          </DropdownMenu.Item>
          <DropdownMenu.Item
            className={UserWidgetCSS["select-item"]}
            onClick={() => goToPage(`/account-settings/${user?.id}`)}
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
