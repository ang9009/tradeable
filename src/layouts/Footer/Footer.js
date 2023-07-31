import FooterCSS from "./Footer.module.css";
import Logo from "../../components/ui/Logo/Logo";

function Footer() {
  return (
    <div className={FooterCSS["footer-container"]}>
      <ul>
        <li>About</li>
        <li>Help</li>
        <li>Terms & Conditions</li>
        <li>iOS App</li>
      </ul>
      <Logo />
    </div>
  );
}

export default Footer;
