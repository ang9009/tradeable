import { useEffect, useState } from "react";
import Button from "../../../../components/ui/Button/Button";
import Logo from "../../../../components/ui/Logo/Logo";
import { AuthWidget } from "../../../../features/auth";
import HeroSearchbar from "../HeroSearchbar/HeroSearchbar";
import HeroNavbarCSS from "./HeroNavbar.module.css";

function HeroNavbar() {
  const [changeNav, setChangeNav] = useState(false);

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
    <nav
      className={HeroNavbarCSS["nav"]}
      style={{
        borderBottom: changeNav ? "var(--primary-border)" : "#fff",
        background: changeNav ? "#fff" : "none",
      }}
    >
      <div className={HeroNavbarCSS["nav-left"]}>
        <Logo color={changeNav ? "var(--shareable-burgundy)" : "#fff"} />
        <HeroSearchbar changeNav={changeNav} />
      </div>
      <div className={HeroNavbarCSS["nav-right"]}>
        <Button
          options={{
            type: changeNav ? "black-outline" : "white-outline",
            text: "iOS App",
          }}
        />
        <AuthWidget changeNav={changeNav} />
      </div>
    </nav>
  );
}

export default HeroNavbar;
