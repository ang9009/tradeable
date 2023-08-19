import { useRef, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { FiX } from "react-icons/fi";
import NavSearchbarCSS from "./NavSearchbar.module.css";

const NavSearchbar = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchText, setSearchText] = useState("");
  const inputRef = useRef(null);

  // Toggles between outline searchbar and default searchbar
  return (
    <div
      className={NavSearchbarCSS.searchbar}
      style={{ outline: isFocused && "var(--input-focus-border)" }}
    >
      <div
        className={NavSearchbarCSS["placeholder-icon"]}
        onClick={() => inputRef.current.focus()}
        onMouseDown={(e) => {
          if (isFocused) {
            setSearchText("");
            e.preventDefault();
          }
        }}
      >
        {isFocused && (
          <FiX size={"17px"} className={NavSearchbarCSS["clear-search-btn"]} />
        )}
      </div>
      <input
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        type="text"
        className={`${NavSearchbarCSS["input"]} ${NavSearchbarCSS["default-search"]}`}
        autoComplete="off"
        placeholder={"Search..."}
        onFocus={() => setIsFocused(true)}
        onBlur={() => {
          setIsFocused(false);
          setSearchText("");
        }}
        ref={inputRef}
      />
      {
        <button className={NavSearchbarCSS["default-search-btn"]}>
          <BiSearch
            size={"17px"}
            className={NavSearchbarCSS["btn-search-icon"]}
          />
        </button>
      }
    </div>
  );
};

export default NavSearchbar;
