import SearchLocationOptionCSS from "./SearchLocationOption.module.css";

function SearchLocationOption(option) {
  return (
    <div className={SearchLocationOptionCSS["option-container"]}>
      <p>{option.label}</p>
      <p className={SearchLocationOptionCSS["address"]}>{option.address}</p>
    </div>
  );
}

export default SearchLocationOption;
