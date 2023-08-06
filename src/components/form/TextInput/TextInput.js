import { toCamelCase } from "../../../utils/toCamelCase";
import InputMessage from "../InputMessage/InputMessage";

function TextInput({
  options: { className, label, placeholder, max },
  formData: { register, errors },
}) {
  // The "required" prop from Radix conflicts with the error object from react-hook-form so don't add it

  const registerSettings = {
    ...register(toCamelCase(label), {
      required: "This input is required",
      maxLength: {
        value: max,
        message: `Must be ${max} characters or less`,
      },
    }),
  };

  return (
    <div className={`input-field-container ${className}`}>
      <label className={"input-label"} htmlFor={toCamelCase(label)}>
        {label}
      </label>
      <input
        {...registerSettings}
        id={toCamelCase(label)}
        className={"input"}
        type={"text"}
        placeholder={placeholder}
        autoComplete="off"
        style={{
          outline: errors[toCamelCase(label)] && "var(--input-warning-border)",
        }}
      />
      <InputMessage message={errors[toCamelCase(label)]?.message} isError />
    </div>
  );
}

export default TextInput;
