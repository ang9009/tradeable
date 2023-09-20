import { toCamelCase } from "../../../utils/toCamelCase";
import InputMessage from "../InputMessage/InputMessage";
import TextAreaCSS from "./TextArea.module.css";

function TextArea({
  options: { className, label, placeholder, max, min },
  formData: { register, errors },
}) {
  const registerSettings = {
    ...register(toCamelCase(label), {
      required: "This input is required",
      maxLength: {
        value: max,
        message: `Must be ${max} characters or less`,
      },
      minLength: {
        value: min,
        message: `Must be at least ${min} characters`,
      },
    }),
  };

  return (
    <div className={`input-field-container ${className}`}>
      <label className={"input-label"} htmlFor={toCamelCase(label)}>
        {label}
      </label>
      <textarea
        {...registerSettings}
        id={toCamelCase(label)}
        className={`${TextAreaCSS["text-area"]} input`}
        placeholder={placeholder}
        autoComplete="off"
        style={{
          outline: errors[toCamelCase(label)] && "var(--input-warning-border)",
        }}
      />
      {errors[toCamelCase(label)] && (
        <InputMessage message={errors[toCamelCase(label)]?.message} isError />
      )}
    </div>
  );
}

export default TextArea;
