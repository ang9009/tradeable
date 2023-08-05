import * as RadixCheckbox from "@radix-ui/react-checkbox";
import { useController } from "react-hook-form";
import { FiCheck } from "react-icons/fi";
import { toCamelCase } from "../../../utils/toCamelCase";
import CheckboxCSS from "./Checkbox.module.css";

function Checkbox({
  options: { label, name, className },
  formData: { control, validate },
}) {
  const {
    field: { onChange, value },
  } = useController({
    name,
    control,
    defaultValue: [],
    rules: {
      validate: validate,
    },
  });

  return (
    <div className={`${CheckboxCSS["input-container"]} ${className}`}>
      <RadixCheckbox.Root
        className={CheckboxCSS["checkbox"]}
        id={toCamelCase(label)}
        name={name}
        onCheckedChange={(isChecked) =>
          onChange(
            isChecked
              ? [...value, toCamelCase(label)]
              : value?.filter((v) => v !== toCamelCase(label))
          )
        }
        value={value}
      >
        <RadixCheckbox.Indicator className={CheckboxCSS["check"]}>
          <FiCheck />
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>
      <label
        className={CheckboxCSS["checkbox-label"]}
        htmlFor={toCamelCase(label)}
      >
        {label}
      </label>
    </div>
  );
}

export default Checkbox;
