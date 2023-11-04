import { useQuery } from "@tanstack/react-query";
import debounce from "lodash.debounce";
import isEqual from "lodash.isequal";
import { useCallback, useState } from "react";
import { Controller } from "react-hook-form";
import Select from "react-select";
import { toast } from "react-toastify";
import InputMessage from "../../../../components/form/InputMessage/InputMessage";
import SearchIndicator from "../../../../components/ui/SearchIndicator/SearchIndicator";
import { getLocationAutocomplete } from "../../../../lib/geoapify";
import getLocationSearchStyles from "../../data/getLocationSearchStyles";
import {
  noOptionsMessage,
  validateLocations,
} from "../../utils/locationSearchHelpers";
import SearchLocationOption from "../SearchLocationOption/SearchLocationOption";
import LocationSearchBarCSS from "./LocationSearchBar.module.css";

export function LocationSearchBar({ formData: { control, errors } }) {
  // Used to automatically update input
  const [inputText, setInputText] = useState("");
  // Used to update search query
  const [searchText, setSearchText] = useState("");
  const [options, setOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Triggered by search input on change
  function handleInputChange(inputText, meta) {
    if (meta.action !== "input-blur" && meta.action !== "menu-close") {
      setInputText(inputText);
      handleSearchDebounce(inputText);
    }
  }

  const handleSearchDebounce = useCallback(
    debounce((searchText) => {
      // Must clear options to show loading status
      setOptions([]);

      if (searchText.trim().length === 0) {
        setOptions([]);
      } else {
        setSearchText(searchText);
      }
    }, 300),
    []
  );

  // Triggered by searchText changing, responsible for calling fetch function
  useQuery(
    searchText ? ["locationsData", searchText] : ["locationsData"],
    async () => await search(searchText),
    {
      enabled: !!searchText,
    }
  );

  async function search(searchText) {
    setIsLoading(true);

    const res = await getLocationAutocomplete(searchText).catch((err) => {
      toast.error("An error occurred", { autoClose: 3000 });
    });
    setOptions(res);
    setIsLoading(false);
    return res;
  }

  return (
    <div
      className={`input-field-container  ${LocationSearchBarCSS["input-container"]}`}
    >
      <label className={"input-label"} htmlFor={"search-location"}>
        Add meet up locations
      </label>
      <InputMessage isError message={errors?.meetUpLocations?.message} />
      <Controller
        control={control}
        name={"meetUpLocations"}
        defaultValue={[]}
        rules={{ validate: (v) => validateLocations(v) }}
        render={({ field: { onChange, value } }) => (
          <Select
            value={""}
            filterOption={() => true}
            onChange={(option) => {
              if (!option) return;
              if (value) {
                !value.some((select) => isEqual(option, select))
                  ? onChange([...value, option])
                  : toast.error("You have already selected this option", {
                      autoClose: 3000,
                    });
              } else {
                onChange([option]);
              }
              setOptions([]);
            }}
            inputValue={inputText}
            isLoading={isLoading}
            onInputChange={(inputText, meta) =>
              handleInputChange(inputText, meta)
            }
            placeholder={"Search location..."}
            options={options}
            styles={getLocationSearchStyles(errors)}
            isClearable
            menuPlacement="auto"
            components={{
              DropdownIndicator: SearchIndicator,
            }}
            formatOptionLabel={SearchLocationOption}
            noOptionsMessage={noOptionsMessage}
            unstyled
          />
        )}
      />
      <p className={LocationSearchBarCSS["hint"]}>
        For your safety, please select public spaces
      </p>
    </div>
  );
}
