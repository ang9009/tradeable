import { Controller } from "react-hook-form";
import { FiChevronDown } from "react-icons/fi";
import Select, { components } from "react-select";
import getSelectInputStyles from "../../../data/getSelectInputStyles";
import { getConditionHint } from "../../../features/createlisting";
import { toCamelCase } from "../../../utils/toCamelCase";
import InputMessage from "../InputMessage/InputMessage";
import SelectInputCSS from "./SelectInput.module.css";

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <FiChevronDown size={"15px"} />
    </components.DropdownIndicator>
  );
};

function SelectInput({
  options: { label, placeholder, selectOptions, hasConditionHint, isMulti },
  formData: { control, errors },
}) {
  // The "required" prop from Radix conflicts with the error object from react-hook-form, so don't add it

  function handleOutline(state) {
    if (errors[toCamelCase(label)]) {
      return "var(--input-warning-border)";
    }

    return state.isFocused
      ? "var(--input-focus-border)"
      : "var(--primary-border)";
  }

  return (
    <div className={"input-field-container"}>
      <label htmlFor={toCamelCase(label)} className={"input-label"}>
        {label}
      </label>
      <Controller
        control={control}
        rules={{ required: "This input is required" }}
        name={toCamelCase(label)}
        render={({ field }) => (
          <>
            <Select
              {...field}
              className={SelectInputCSS["select"]}
              classNamePrefix={"react-select"}
              inputId={toCamelCase(label)}
              placeholder={placeholder}
              components={{ DropdownIndicator }}
              styles={getSelectInputStyles(handleOutline)}
              options={selectOptions}
              isSearchable={false}
              isMulti={isMulti}
              unstyled
            />
            {hasConditionHint && (
              <InputMessage message={getConditionHint(field.value?.value)} />
            )}
            <InputMessage
              message={errors[toCamelCase(label)]?.message}
              isError
            />
          </>
        )}
      />
    </div>
  );
}

export default SelectInput;
