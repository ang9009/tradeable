import { useState } from "react";
import NavSearchbarCSS from "./NavSearchbar.module.css";
import { BiSearch } from "react-icons/bi";

const Searchbar = () => {
  return (
    <div className={NavSearchbarCSS.searchbar}>
      <BiSearch size={"16px"} className={NavSearchbarCSS["search-icon"]} />
      <input
        type="text"
        className={NavSearchbarCSS.input}
        placeholder={"Search for items"}
      />
      <button className={NavSearchbarCSS["search-btn"]}>
        <BiSearch size={"16px"} />
      </button>
    </div>
  );
};

export default Searchbar;
