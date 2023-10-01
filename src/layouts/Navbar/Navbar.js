import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import categories from "../../data/categories";
import AuthWidget from "../../features/auth/components/AuthWidget/AuthWidget";
import Sidebar from "../Sidebar/Sidebar";
import Logo from "./../../components/ui/Logo/Logo";
import NavbarCSS from "./Navbar.module.css";
import NavSearchbar from "./components/NavSearchbar/NavSearchbar";

const Navbar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <>
      <Sidebar
        openSidebar={openSidebar}
        setOpenSidebar={setOpenSidebar}
        className={NavbarCSS["sidebar"]}
      />
      <nav className={NavbarCSS["nav-container"]}>
        <div className={NavbarCSS["nav-top"]}>
          <div className={NavbarCSS["nav-left"]}>
            <Logo color={"var(--tradeable-burgundy)"} />
            <NavSearchbar />
          </div>
          <div className={NavbarCSS["nav-right"]}>
            <AuthWidget className={NavbarCSS["auth-widget"]} />
          </div>
          <FiMenu
            className={NavbarCSS["hamburger-icon"]}
            size={"35px"}
            onClick={() => setOpenSidebar(true)}
          />
        </div>
        <div className={NavbarCSS["nav-bottom"]}>
          <ul>
            {categories.map((category) => (
              <li key={category}>{category}</li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
