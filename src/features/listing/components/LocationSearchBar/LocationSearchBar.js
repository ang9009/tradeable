import isEqual from "lodash.isequal";
import { useEffect, useState } from "react";
import { Controller } from "react-hook-form";
import Select from "react-select";
import InputMessage from "../../../../components/form/InputMessage/InputMessage";
import SearchIndicator from "../../../../components/ui/SearchIndicator/SearchIndicator";
import { useSetToast } from "../../../../context/ToastContext";
import { getLocationAutocomplete } from "../../../../lib/geoapify";
import getLocationSearchStyles from "../../data/getLocationSearchStyles";
import {
  handleInputChange,
  noOptionsMessage,
  validateLocations,
} from "../../utils/locationSearchHelpers";
import SearchLocationOption from "../SearchLocationOption/SearchLocationOption";
import LocationSearchBarCSS from "./LocationSearchBar.module.css";

export function LocationSearchBar({
  formData: { control, errors, getValues },
}) {
  const [query, setQuery] = useState("");
  const [options, setOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const setToast = useSetToast();

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (query.trim().length === 0) {
        setOptions([]);
        return;
      }

      setIsLoading(true);
      getLocationAutocomplete(query).then((res) => {
        setOptions(res);
        setIsLoading(false);
      });
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [query]);

  return (
    <div
      className={`input-field-container  ${LocationSearchBarCSS["input-container"]}`}
    >
      <label className={"input-label"} htmlFor={"search-location"}>
        Add meet up locations
      </label>
      <InputMessage isError message={errors?.meetupLocations?.message} />
      <Controller
        control={control}
        name={"meetupLocations"}
        defaultValue={[]}
        rules={{ validate: (v) => validateLocations(v, getValues) }}
        render={({ field: { onChange, value } }) => (
          <Select
            value={""}
            onChange={(option) => {
              if (!option) return;

              !value?.some((select) => isEqual(option, select))
                ? onChange([...value, option])
                : setToast(4000, "You have already added this location");
            }}
            inputValue={query}
            isLoading={isLoading}
            onInputChange={(query, meta) =>
              handleInputChange(query, meta, setQuery)
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
    </div>
  );
}
