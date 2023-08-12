import { useRef, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { FiX } from "react-icons/fi";
import HeroSearchbarCSS from "./HeroSearchbar.module.css";

const HeroSearchbar = ({ changeNav }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchText, setSearchText] = useState("");
  const inputRef = useRef(null);

  // Toggles between outline searchbar and default searchbar
  return (
    <div
      className={HeroSearchbarCSS.searchbar}
      style={{
        background: isFocused || changeNav ? "#fff" : "none",
        outline: changeNav ? "1px solid black" : "1px solid white",
      }}
    >
      <div
        className={HeroSearchbarCSS["placeholder-icon"]}
        onClick={() => inputRef.current.focus()}
        style={{ color: isFocused || changeNav ? "black" : "#fff" }}
        onMouseDown={(e) => {
          if (isFocused) {
            setSearchText("");
            e.preventDefault();
          }
        }}
      >
        {isFocused ? (
          <FiX size={"17px"} className={HeroSearchbarCSS["clear-search-btn"]} />
        ) : (
          <BiSearch size={"17px"} />
        )}
      </div>
      <input
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        type="text"
        className={`${HeroSearchbarCSS["input"]} ${
          changeNav
            ? HeroSearchbarCSS["default-search"]
            : HeroSearchbarCSS["hero-search"]
        }`}
        autoComplete="off"
        placeholder={"Search for items"}
        onFocus={() => setIsFocused(true)}
        onBlur={() => {
          setIsFocused(false);
          setSearchText("");
        }}
        ref={inputRef}
      />
      {changeNav && (
        <button className={HeroSearchbarCSS["search-btn"]}>
          <BiSearch
            size={"17px"}
            className={HeroSearchbarCSS["btn-search-icon"]}
          />
        </button>
      )}
    </div>
  );
};

export default HeroSearchbar;
