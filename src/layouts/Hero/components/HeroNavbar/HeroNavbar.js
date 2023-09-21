import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import Logo from "../../../../components/ui/Logo/Logo";
import { AuthWidget } from "../../../../features/auth";
import Sidebar from "../../../Sidebar/Sidebar";
import HeroSearchbar from "../HeroSearchbar/HeroSearchbar";
import HeroNavbarCSS from "./HeroNavbar.module.css";

function HeroNavbar() {
  const [changeNav, setChangeNav] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);

  const changeNavBg = () => {
    const viewHeight = window.innerHeight - 75;
    window.scrollY >= viewHeight ? setChangeNav(true) : setChangeNav(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavBg);
    return () => {
      window.removeEventListener("scroll", changeNavBg);
    };
  }, []);

  return (
    <>
      <nav
        className={HeroNavbarCSS["nav"]}
        style={{
          borderBottom: changeNav
            ? "var(--primary-border)"
            : "1px solid rgba(255, 255, 255, 0.2)",
          background: changeNav ? "#fff" : "none",
        }}
      >
        <div className={HeroNavbarCSS["nav-left"]}>
          <Logo color={changeNav ? "var(--tradeable-burgundy)" : "#fff"} />
          <HeroSearchbar changeNav={changeNav} />
        </div>
        <div className={HeroNavbarCSS["nav-right"]}>
          <AuthWidget changeNav={changeNav} />
          <FiMenu
            color={changeNav ? "black" : "white"}
            className={HeroNavbarCSS["hamburger-icon"]}
            style={{ borderColor: changeNav ? "black" : "white" }}
            size={"35px"}
            onClick={() => setOpenSidebar(true)}
          />
        </div>
      </nav>
      <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
    </>
  );
}

export default HeroNavbar;
