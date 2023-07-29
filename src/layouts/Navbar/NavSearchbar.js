import NavSearchbarCSS from "./NavSearchbar.module.css";
import { FiSearch } from "react-icons/fi";

const Searchbar = () => {
  return (
    <div className={NavSearchbarCSS.searchbar}>
      <FiSearch className={NavSearchbarCSS["search-icon"]} />
      <input type="text" placeholder={"Search for items"} />
      <button className={NavSearchbarCSS["search-btn"]}>
        <FiSearch className={NavSearchbarCSS["search-icon"]} />
      </button>
    </div>
  );
};

export default Searchbar;
