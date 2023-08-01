import * as Form from "@radix-ui/react-form";
import { FiChevronDown } from "react-icons/fi";
import Select, { components } from "react-select";
import { selectInputStyles } from "../../../data/selectInputStyles";
import getConditionHint from "../../../features/listing/utils/getConditionHint";
import { Controller } from "react-hook-form";
import { toCamelCase } from "../../../utils/toCamelCase";
import "./SelectInput.css";

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <FiChevronDown />
    </components.DropdownIndicator>
  );
};

function SelectInput({
  className,
  label,
  placeholder,
  hasConditionHint,
  control,
  options,
}) {
  return (
    <Form.Field className={`input-field-container ${className}`}>
      <Form.Label className={"input-label"}>{label}</Form.Label>
      <Controller
        control={control}
        rules={{ required: true }}
        name={toCamelCase(label)}
        render={({ field }) => (
          <>
            <Select
              {...field}
              placeholder={placeholder}
              components={{ DropdownIndicator }}
              classNamePrefix="react-select"
              // Styles prop doesn't support pseudo selectors, so there are some styles in SelectInput.css
              styles={selectInputStyles}
              options={options}
              isSearchable={false}
              unstyled
            />
            {hasConditionHint && (
              <div className="select-hint">
                {getConditionHint(field.value?.value)}
              </div>
            )}
          </>
        )}
      />
    </Form.Field>
  );
}

export default SelectInput;
