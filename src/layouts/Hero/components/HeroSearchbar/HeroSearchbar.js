import { useRef, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { FiX } from "react-icons/fi";
import HeroSearchbarCSS from "./HeroSearchbar.module.css";

function HeroSearchbar() {
  const [isFocused, setIsFocused] = useState(false);
  const [searchText, setSearchText] = useState("");
  const inputRef = useRef(null);

  return (
    <div
      className={`${HeroSearchbarCSS.searchbar} 
  ${isFocused && HeroSearchbarCSS["searchbar-focus"]}`}
      style={{ background: isFocused ? "#fff" : "none" }}
      onKeyDown={(e) => {
        if (e.key === "Escape" && isFocused) {
          inputRef.current.blur();
          setSearchText("");
        }
      }}
    >
      <div
        className={HeroSearchbarCSS["placeholder-icon"]}
        onClick={() => inputRef.current.focus()}
        style={{ color: isFocused ? "black" : "#fff" }}
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
        type="text"
        className={HeroSearchbarCSS.input}
        autoComplete="off"
        placeholder={"Search..."}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        ref={inputRef}
      />
    </div>
  );
}

export default HeroSearchbar;
