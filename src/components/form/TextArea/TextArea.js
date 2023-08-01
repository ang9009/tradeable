import React from "react";
import * as Form from "@radix-ui/react-form";
import TextAreaCSS from "./TextArea.module.css";
import { toCamelCase } from "../../../utils/toCamelCase";

function TextArea({ className, label, placeholder, register }) {
  return (
    <Form.Field className={`input-field-container ${className}`}>
      <Form.Label className={"input-label"}>{label}</Form.Label>
      <Form.Control className={"input"} asChild>
        <textarea
          maxLength="500"
          {...register(toCamelCase(label))}
          className={TextAreaCSS["text-area"]}
          placeholder={placeholder}
          required
        />
      </Form.Control>
    </Form.Field>
  );
}

export default TextArea;
