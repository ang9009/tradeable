import { useState } from "react";
import NavSearchbarCSS from "./NavSearchbar.module.css";
import { BiSearch } from "react-icons/bi";
import { FiX } from "react-icons/fi";
import { useRef } from "react";

const Searchbar = () => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  return (
    <div
      className={`${NavSearchbarCSS.searchbar} 
      ${isFocused && NavSearchbarCSS["searchbar-focus"]}`}
    >
      <div
        className={NavSearchbarCSS["placeholder-icon"]}
        onClick={() => inputRef.current.focus()}
      >
        {isFocused ? (
          <FiX size={"17px"} className={NavSearchbarCSS["clear-search-btn"]} />
        ) : (
          <BiSearch size={"17px"} />
        )}
      </div>
      <input
        type="text"
        className={NavSearchbarCSS.input}
        placeholder={"Search for items"}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        ref={inputRef}
      />
      <button className={NavSearchbarCSS["search-btn"]}>
        <BiSearch
          size={"17px"}
          className={NavSearchbarCSS["btn-search-icon"]}
        />
      </button>
    </div>
  );
};

export default Searchbar;
