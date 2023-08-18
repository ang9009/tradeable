import { FiMenu } from "react-icons/fi";
import Button from "../../components/ui/Button/Button";
import AuthWidget from "../../features/auth/components/AuthWidget/AuthWidget";
import Logo from "./../../components/ui/Logo/Logo";
import NavbarCSS from "./Navbar.module.css";
import NavSearchbar from "./components/NavSearchbar/NavSearchbar";

const Navbar = () => {
  return (
    <nav className={NavbarCSS["nav-container"]}>
      <div className={NavbarCSS["nav-top"]}>
        <div className={NavbarCSS["nav-left"]}>
          <Logo color={"var(--shareable-burgundy)"} />
          <NavSearchbar />
        </div>
        <div className={NavbarCSS["nav-right"]}>
          <Button
            options={{
              type: "black-outline",
              text: "iOS App",
              className: NavbarCSS["ios-app-btn"],
            }}
          />
          <AuthWidget className={NavbarCSS["auth-widget"]} />
        </div>
        <FiMenu className={NavbarCSS["hamburger-icon"]} size={"35px"} />
      </div>
      <div className={NavbarCSS["nav-bottom"]}>
        <ul>
          <li>Donated</li>
          <li>Textbooks</li>
          <li>Uniforms</li>
          <li>Electronics</li>
          <li>Subscriptions</li>
          <li>Miscellaneous</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
