import { FiMenu } from "react-icons/fi";
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
          <button className={NavbarCSS["ios-app-btn"]}>iOS App</button>
          <AuthWidget />
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
