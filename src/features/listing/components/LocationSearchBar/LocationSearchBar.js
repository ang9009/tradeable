import { useState } from "react";
import Select from "react-select";
import ClearIndicator from "../../../../components/ui/ClearIndicator/ClearIndicator";
import SearchIndicator from "../../../../components/ui/SearchIndicator/SearchIndicator";
import getSearchLocationStyles from "../../data/getSearchLocationStyles";
import { handleInputChange } from "../../utils/locationSearchHelpers";
import SearchLocationOption from "../SearchLocationOption/SearchLocationOption";
import LocationSearchBarCSS from "./LocationSearchBar.module.css";

export function LocationSearchBar({ selected, setSelected }) {
  const [query, setQuery] = useState("");
  const options = [
    {
      label: "Causeway Bay",
      value: "causeway bay",
      address: "Hong Kong Island, Hong Kong, China",
    },
    {
      label: "North Point",
      value: "north point",
      address: "Hong Kong Island, Hong Kong, Europe",
    },
    {
      label: "Pacific Place",
      value: "pacific place",
      address: "88 Queensway, Admiralty, Hong Kong, China",
    },
  ];

  return (
    <div
      className={`input-field-container  ${LocationSearchBarCSS["input-container"]}`}
    >
      <label className={"input-label"} htmlFor={"search-location"}>
        Search and add locations
      </label>
      <Select
        inputValue={query}
        placeholder={"Enter location..."}
        onInputChange={(query, meta) =>
          handleInputChange(query, meta, setQuery)
        }
        options={options}
        styles={getSearchLocationStyles()}
        isClearable
        menuPlacement="auto"
        components={{
          ClearIndicator,
          DropdownIndicator: SearchIndicator,
        }}
        formatOptionLabel={SearchLocationOption}
        unstyled
      />
    </div>
  );
}
