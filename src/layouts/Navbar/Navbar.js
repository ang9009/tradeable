import { useState } from "react";
import { FiMenu, FiPlus, FiSearch } from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button/Button";
import { useUser } from "../../context/UserContext";
import categories from "../../data/categories";
import AuthWidget from "../../features/auth/components/AuthWidget/AuthWidget";
import Sidebar from "../Sidebar/Sidebar";
import Logo from "./../../components/ui/Logo/Logo";
import NavbarCSS from "./Navbar.module.css";

const Navbar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useUser();

  function getCategoryUrl(category) {
    return `search?listings%5BrefinementList%5D%5Bcategory%5D%5B0%5D=${category}`;
  }

  return (
    <>
      {/* Move up when banner closed */}
      <div
        className={NavbarCSS["component-container"]}
        style={{
          marginBottom: location.pathname !== "/" && "var(--navbar-height)",
        }}
      >
        <Sidebar
          openSidebar={openSidebar}
          setOpenSidebar={setOpenSidebar}
          className={NavbarCSS["sidebar"]}
        />

        {location.pathname === "/" && (
          <div className={NavbarCSS["banner"]}>
            <p>
              NU London/Oakland students:{" "}
              <Link to="/neu" className={NavbarCSS["banner-link"]}>
                learn how you can trade with each other
              </Link>
            </p>
          </div>
        )}
        <nav
          className={NavbarCSS["nav-container"]}
          style={{ top: location.pathname !== "/" && 0 }}
        >
          <div className={NavbarCSS["nav-left"]}>
            <Logo
              color={"var(--tradeable-burgundy)"}
              className={NavbarCSS["logo"]}
            />
            <ul className={NavbarCSS["categories"]}>
              {categories.map((category) => (
                <li
                  key={category}
                  onClick={() => {
                    navigate(getCategoryUrl(category));
                    window.location.reload();
                  }}
                >
                  {category}
                </li>
              ))}
              <li
                onClick={() => {
                  navigate(
                    "/search?listings%5BrefinementList%5D%5BisExchange%5D%5B0%5D=true"
                  );
                  window.location.reload();
                }}
              >
                NEU Exchange
              </li>
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
            {user && (
              <Button
                options={{
                  type: "icon",
                  text: <FiPlus size="25px" />,
                  className: NavbarCSS["sell-btn"],
                }}
                onClick={() => navigate("/create-listing")}
              />
            )}
            <AuthWidget className={NavbarCSS["auth-widget"]} />
          </div>
          <FiMenu
            className={NavbarCSS["hamburger-icon"]}
            size={"25px"}
            onClick={() => setOpenSidebar(true)}
          />
        </nav>
      </div>
    </>
  );
};

export default Navbar;
