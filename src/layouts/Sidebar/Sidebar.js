import { useEffect } from "react";
import { FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Logo from "../../components/ui/Logo/Logo";
import { useUser } from "../../context/UserContext";
import categories from "../../data/categories";
import SidebarCSS from "./Sidebar.module.css";
import SidebarUserWidget from "./components/SidebarUserWidget/SidebarUserWidget";

function Sidebar({ openSidebar, setOpenSidebar, className }) {
  const { user } = useUser();
  const navigate = useNavigate();
  function getCategoryUrl(category) {
    return `search?listings%5BrefinementList%5D%5Bcategory%5D%5B0%5D=${category}`;
  }

  useEffect(() => {
    if (openSidebar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openSidebar]);

  return (
    <div className={className}>
      <div
        className={`${SidebarCSS["sidebar-container"]} ${
          openSidebar && SidebarCSS["sidebar-open"]
        }`}
      >
        <div className={SidebarCSS["sidebar-content-container"]}>
          <>
            <div className={SidebarCSS["user-widget-and-close-btn"]}>
              <SidebarUserWidget setOpenSidebar={setOpenSidebar} />
              <FiX
                size={"35px"}
                className={SidebarCSS["close-btn"]}
                onClick={() => setOpenSidebar(false)}
              />
            </div>
            <div className={SidebarCSS["separator"]}></div>
          </>
          <ul className={SidebarCSS["category-list"]}>
            {categories.map((category) => (
              <li
                key={category}
                onClick={() => {
                  setOpenSidebar(false);
                  navigate(getCategoryUrl(category));
                  window.location.reload();
                }}
              >
                {category}
              </li>
            ))}
          </ul>
          <Logo
            className={SidebarCSS["logo"]}
            color={"var(--tradeable-burgundy)"}
          />
        </div>
      </div>
      <div
        className={`${SidebarCSS["sidebar-bg"]} ${
          openSidebar && SidebarCSS["sidebar-bg-open"]
        }`}
        onClick={() => setOpenSidebar(false)}
      ></div>
    </div>
  );
}

export default Sidebar;
