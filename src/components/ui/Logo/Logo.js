import { Link } from "react-router-dom";
import { ReactComponent as LogoImg } from "../../../assets/cis_logo.svg";
import LogoCSS from "./Logo.module.css";

function Logo({ color, logoColor }) {
  return (
    <Link to="/" className={LogoCSS.logo}>
      <LogoImg fill={logoColor || color} className={LogoCSS["logo-img"]} />
      <div LogoCSS={"logo-img"} />
      <h1 style={{ color: color }}>shareable</h1>
    </Link>
  );
}

export default Logo;
