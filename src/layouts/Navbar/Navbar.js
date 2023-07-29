import AuthWidget from "../../features/auth/components/AuthWidget/AuthWidget";
import NavbarCSS from "./Navbar.module.css";
import cisLogo from "../../assets/cis_logo.svg";
import Searchbar from "./NavSearchbar";
import Button from "../../components/ui/Button/Button";

const Navbar = () => {
  return (
    <nav className={NavbarCSS.navbar}>
      <div className={NavbarCSS["nav-top"]}>
        <div className={NavbarCSS["nav-left"]}>
          <div className={NavbarCSS.logo}>
            <img src={cisLogo} alt="" className={NavbarCSS.logo} />
            <h1>shareable</h1>
          </div>
          <Searchbar />
        </div>
        <div className={NavbarCSS["nav-right"]}>
          <Button type={"blackOutline"} text={"iOS App"} />
          <span className={NavbarCSS.separator}></span>
          <AuthWidget />
        </div>
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
