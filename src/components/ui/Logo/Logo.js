import { Link } from "react-router-dom";
import Icon from "./Icon";
import LogoCSS from "./Logo.module.css";

function Logo({ color, className }) {
  return (
    <Link to="/" className={`${LogoCSS.logo} ${className}`}>
      <Icon />
      <div style={{ color: color || "#fff" }} className={LogoCSS["name"]}>
        tradeable
      </div>
    </Link>
  );
}

export default Logo;
