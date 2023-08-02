import * as Form from "@radix-ui/react-form";
import { FiChevronDown } from "react-icons/fi";
import Select, { components } from "react-select";
import { selectInputStyles } from "../../../data/selectInputStyles";
import { getConditionHint } from "../../../features/listing";
import { toCamelCase } from "../../../utils/toCamelCase";
import { Controller } from "react-hook-form";
import { selectInputControlStyles } from "../../../data/selectInputControlStyles";
import InputMessage from "../InputMessage/InputMessage";

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <FiChevronDown size={"15px"} />
    </components.DropdownIndicator>
  );
};

function SelectInput({
  label,
  placeholder,
  errors,
  hasConditionHint,
  control,
  options,
}) {
  // ! the "required" prop from Radix conflicts with the error object from react-hook-form so don't add it
  function handleOutline(state) {
    if (errors[toCamelCase(label)]) {
      return "var(--input-warning-border)";
    }

    return state.isFocused
      ? "var(--input-focus-border)"
      : "1px solid var(--primary-border-color)";
  }

  return (
    <Form.Field className={"input-field-container"}>
      <Form.Label className={"input-label"}>{label}</Form.Label>
      <Controller
        control={control}
        rules={{ required: "This input is required" }}
        name={toCamelCase(label)}
        render={({ field }) => (
          <>
            <Select
              {...field}
              placeholder={placeholder}
              components={{ DropdownIndicator }}
              classNamePrefix="react-select"
              // TODO: if possible, find alternative to this
              styles={{
                ...selectInputStyles,
                control: (_, state) => ({
                  ...selectInputControlStyles,
                  outline: handleOutline(state),
                }),
              }}
              options={options}
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
    </Form.Field>
  );
}

export default SelectInput;
