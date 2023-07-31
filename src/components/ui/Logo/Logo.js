import React from "react";
import cisLogo from "../../../assets/cis_logo.svg";
import LogoCSS from "./Logo.module.css";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/" className={LogoCSS.logo}>
      <img src={cisLogo} draggable={false} />
      <h1>shareable</h1>
    </Link>
  );
}

export default Logo;
