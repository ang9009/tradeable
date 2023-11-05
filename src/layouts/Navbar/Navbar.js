import { useState } from "react";
import { FiMenu, FiPlus, FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button/Button";
import categories from "../../data/categories";
import AuthWidget from "../../features/auth/components/AuthWidget/AuthWidget";
import Sidebar from "../Sidebar/Sidebar";
import Logo from "./../../components/ui/Logo/Logo";
import NavbarCSS from "./Navbar.module.css";

const Navbar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const navigate = useNavigate();

  return (
    <div className={NavbarCSS["component-container"]}>
      <Sidebar
        openSidebar={openSidebar}
        setOpenSidebar={setOpenSidebar}
        className={NavbarCSS["sidebar"]}
      />
      <nav className={NavbarCSS["nav-container"]}>
        <div className={NavbarCSS["nav-left"]}>
          <Logo
            color={"var(--tradeable-burgundy)"}
            className={NavbarCSS["logo"]}
          />
          <ul className={NavbarCSS["categories"]}>
            {categories.map((category) => (
              <li key={category}>{category}</li>
            ))}
          </ul>
        </div>
        <div className={NavbarCSS["nav-right"]}>
          <Button
            options={{
              type: "icon",
              text: <FiSearch size="22px" />,
              className: NavbarCSS["search-btn"],
            }}
            onClick={() => navigate("/search")}
          />
          <Button
            options={{
              type: "icon",
              text: <FiPlus size="25px" />,
              className: NavbarCSS["sell-btn"],
            }}
            onClick={() => navigate("/create-listing")}
          />
          <AuthWidget className={NavbarCSS["auth-widget"]} />
        </div>
        <FiMenu
          className={NavbarCSS["hamburger-icon"]}
          size={"25px"}
          onClick={() => setOpenSidebar(true)}
        />
      </nav>
    </div>
  );
};

export default Navbar;
