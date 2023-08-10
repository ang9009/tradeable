import Button from "../../components/ui/Button/Button";
import AuthWidget from "../../features/auth/components/AuthWidget/AuthWidget";
import Logo from "./../../components/ui/Logo/Logo";
import Searchbar from "./NavSearchbar";
import NavbarCSS from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={NavbarCSS["nav-container"]}>
      <div className={NavbarCSS["nav-top"]}>
        <div className={NavbarCSS["nav-left"]}>
          <Logo color={"var(--shareable-burgundy)"} />
          <Searchbar />
        </div>
        <div className={NavbarCSS["nav-right"]}>
          <Button options={{ type: "black-outline", text: "iOS App" }} />
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

function undefined({ cisLogo }) {
  return (
    <div className={NavbarCSS.logo}>
      <img src={cisLogo} className={NavbarCSS.logo} draggable={false} />
      <h1>shareable</h1>
    </div>
  );
}
