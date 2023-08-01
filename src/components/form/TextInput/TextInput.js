import React from "react";
import * as Form from "@radix-ui/react-form";
import { toCamelCase } from "../../../utils/toCamelCase";

function TextInput({ className, label, placeholder, register }) {
  return (
    <Form.Field className={`input-field-container ${className}`}>
      <Form.Label className={"input-label"}>{label}</Form.Label>
      <Form.Control className={"input"} asChild>
        <input
          {...register(toCamelCase(label))}
          type={"text"}
          placeholder={placeholder}
          autoComplete="off"
          required
        />
      </Form.Control>
    </Form.Field>
  );
}

export default TextInput;
