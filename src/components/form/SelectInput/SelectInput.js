import * as Form from "@radix-ui/react-form";
import SelectInputCSS from "./SelectInput.module.css";

function SelectInput({ className, label, placeholder, register }) {
  return (
    <Form.Field className={`input-container ${className}`}>
      <Form.Label className={"input-label"}>{label}</Form.Label>
      <Form.Control asChild>
        <select
          name=""
          id=""
          placeholder={placeholder}
          {...register("condition")}
        >
          <option value="test">test</option>
          <option value="test">test</option>
          <option value="test">test</option>
        </select>
      </Form.Control>
    </Form.Field>
  );
}

export default SelectInput;
