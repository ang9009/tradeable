import { useState } from "react";
import { FiMenu, FiSearch } from "react-icons/fi";
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
            <Button
              options={{
                type: "burgundy-filled",
                text: (
                  <div className={NavbarCSS["search-btn-content"]}>
                    <FiSearch />
                    <p>Search</p>
                  </div>
                ),
                className: NavbarCSS["search-btn"],
              }}
              onClick={() => navigate("/search")}
            />
          </div>
          <div className={NavbarCSS["nav-right"]}>
            <AuthWidget className={NavbarCSS["auth-widget"]} />
          </div>
          <FiMenu
            className={NavbarCSS["hamburger-icon"]}
            size={"25px"}
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
