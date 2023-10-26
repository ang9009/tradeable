import Icon from "../../components/ui/Logo/Icon";
import Logo from "../../components/ui/Logo/Logo";
import FooterCSS from "./Footer.module.css";

function Footer() {
  return (
    <>
      <div className={FooterCSS["footer-container"]}>
        <ul>
          <li>About</li>
          <li>Help</li>
          <li>
            Terms
            <span className={FooterCSS["conditions-text"]}> & Conditions</span>
          </li>
        </ul>
        <Logo color={"#fff"} className={FooterCSS["footer-top-logo"]} />
      </div>
      <div className={FooterCSS["footer-bottom-container"]}>
        <div className={FooterCSS["mobile-footer-logo"]}>
          <Icon color={"white"} />
          <div className={FooterCSS["name"]}>tradeable</div>
        </div>
      </div>
    </>
  );
}

export default Footer;
