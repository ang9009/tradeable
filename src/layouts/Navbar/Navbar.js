import NavbarCSS from "./Navbar.module.css";
import cisLogo from "../../assets/cis_logo.svg";
import Searchbar from "./NavSearchbar";

const Navbar = () => {
  return (
    <nav className={NavbarCSS.navbar}>
      <ul className={NavbarCSS["nav-top"]}>
        <li>
          <div className={NavbarCSS.logo}>
            <img src={cisLogo} alt="" className={NavbarCSS.logo} />
            <h1>shareable</h1>
          </div>
        </li>
        <li>
          <Searchbar />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
