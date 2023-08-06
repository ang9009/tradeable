import { useRef, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { FiX } from "react-icons/fi";
import SearchLocationInputCSS from "./SearchLocationInput.module.css";

function SearchLocationInput() {
  const [isFocused, setIsFocused] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  function handlePlaceholderClick() {
    if (isFocused) {
      setIsFocused(false);
      setQuery("");
    } else {
      inputRef.current.focus();
    }
  }

  return (
    <>
      <div
        className={`input-field-container  ${SearchLocationInputCSS["input-container"]}`}
      >
        <label className={"input-label"} htmlFor={"search-location"}>
          Search and add locations
        </label>
        <div
          className={SearchLocationInputCSS["input-wrapper"]}
          style={{ outline: isFocused && "var(--input-focus-border)" }}
        >
          <div
            className={`${SearchLocationInputCSS["placeholder-icon"]} ${
              isFocused && SearchLocationInputCSS["clear-btn"]
            }`}
            onMouseDown={() => handlePlaceholderClick()}
          >
            {isFocused ? <FiX size={"17px"} /> : <BiSearch size={"17px"} />}
          </div>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            ref={inputRef}
            id={"search-location"}
            className={SearchLocationInputCSS["location-input"]}
            type={"text"}
            placeholder={"Enter a location..."}
            autoComplete="off"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </div>
      </div>
    </>
  );
}

export default SearchLocationInput;
