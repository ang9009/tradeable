import SearchLocationOptionCSS from "./SearchLocationOption.module.css";

function SearchLocationOption(option) {
  return (
    <div className={SearchLocationOptionCSS["option-container"]}>
      <p className={SearchLocationOptionCSS["location-name"]}>
        {option.label}
        <div className={SearchLocationOptionCSS["address"]}>
          {option.address}
        </div>
      </p>
    </div>
  );
}

export default SearchLocationOption;
