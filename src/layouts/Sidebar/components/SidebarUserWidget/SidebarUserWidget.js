import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import { useUser } from "../../../../context/UserContext";
import { auth } from "../../../../lib/firebase";
import SidebarUserWidgetCSS from "./SidebarUserWidget.module.css";

function SidebarUserWidget({ className, setOpenSidebar }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const { user } = useUser();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      {user && (
        <div className={SidebarUserWidgetCSS["dropdown-widget-conatiner"]}>
          <div
            className={`${SidebarUserWidgetCSS["widget-container"]} ${className}`}
            onClick={() => setShowDropdown((showDropdown) => !showDropdown)}
          >
            <div className={SidebarUserWidgetCSS.username}>
              {user.displayName}
            </div>
            <FiChevronDown
              className={`${SidebarUserWidgetCSS["down-chevron"]} ${
                showDropdown && SidebarUserWidgetCSS["down-chevron-flip"]
              }`}
            />
          </div>
          {showDropdown && (
            <ul className={`${SidebarUserWidgetCSS["dropdown"]}`}>
              <li>Profile</li>
              <li>Settings</li>
              <li onClick={() => navigate("/create-listing")}>
                Create listing
              </li>
              <li>Messages</li>
              <li>Favorites</li>
              <li
                onClick={() => {
                  auth.signOut();
                  setOpenSidebar(false);
                }}
              >
                Sign out
              </li>
            </ul>
          )}
        </div>
      )}
    </>
  );
}

export default SidebarUserWidget;
