import { Link } from "react-router-dom";
import LogoCSS from "./Logo.module.css";

function Logo({ color, className }) {
  return (
    <Link to="/" className={`${LogoCSS.logo} ${className}`}>
      <div style={{ color: color || "#fff" }} className={LogoCSS["name"]}>
        tradeable
      </div>
    </Link>
  );
}

export default Logo;
