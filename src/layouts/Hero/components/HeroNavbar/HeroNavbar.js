import Button from "../../../../components/ui/Button/Button";
import Logo from "../../../../components/ui/Logo/Logo";
import { AuthWidget } from "../../../../features/auth";
import HeroNavbarCSS from "./HeroNavbar.module.css";

function HeroNavbar() {
  return (
    <div className={HeroNavbarCSS["nav-top"]}>
      <div className={HeroNavbarCSS["nav-left"]}>
        <Logo color={"#fff"} isHero />
      </div>
      <div className={HeroNavbarCSS["nav-right"]}>
        <Button options={{ type: "white-outline", text: "iOS App" }} />
        <AuthWidget isHero />
      </div>
    </div>
  );
}

export default HeroNavbar;
