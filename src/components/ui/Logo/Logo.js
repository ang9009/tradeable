import { Link } from "react-router-dom";
import { ReactComponent as LogoImg } from "../../../assets/cis_logo.svg";
import LogoCSS from "./Logo.module.css";

function Logo({ color }) {
  return (
    <Link to="/" className={LogoCSS.logo}>
      <LogoImg fill={color || "#fff"} className={LogoCSS["logo-img"]} />
      <div style={{ color: color || "#fff" }} className={LogoCSS["name"]}>
        shareable
      </div>
    </Link>
  );
}

export default Logo;
