import { Controller, useFormContext } from "react-hook-form";
import { FiChevronDown } from "react-icons/fi";
import Select, { components } from "react-select";
import { selectInputControlStyles } from "../../../data/selectInputControlStyles";
import { selectInputStyles } from "../../../data/selectInputStyles";
import { getConditionHint } from "../../../features/listing";
import { toCamelCase } from "../../../utils/toCamelCase";
import InputMessage from "../InputMessage/InputMessage";

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <FiChevronDown size={"15px"} />
    </components.DropdownIndicator>
  );
};

function SelectInput({
  options: { label, placeholder, selectOptions, hasConditionHint },
}) {
  // The "required" prop from Radix conflicts with the error object from react-hook-form, so don't add it
  const {
    control,
    formState: { errors },
  } = useFormContext();

  function handleOutline(state) {
    if (errors[toCamelCase(label)]) {
      return "var(--input-warning-border)";
    }

    return state.isFocused
      ? "var(--input-focus-border)"
      : "var(--primary-border)";
  }

  const styles = {
    ...selectInputStyles,
    control: (_, state) => ({
      ...selectInputControlStyles,
      outline: handleOutline(state),
    }),
  };

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
              inputId={toCamelCase(label)}
              placeholder={placeholder}
              components={{ DropdownIndicator }}
              styles={styles}
              options={selectOptions}
              isSearchable={false}
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
