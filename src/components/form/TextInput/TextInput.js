import React from "react";
import * as Form from "@radix-ui/react-form";
import TextInputCSS from "./TextInput.module.css";

function TextInput({ className, label, placeholder, register }) {
  return (
    <Form.Field className={`input-container ${className}`}>
      <Form.Label className={"input-label"}>{label}</Form.Label>
      <Form.Control className={"input"} asChild>
        <input
          {...register("name")}
          className="text-input"
          type="text"
          placeholder={placeholder}
          required
        />
      </Form.Control>
    </Form.Field>
  );
}

export default TextInput;
