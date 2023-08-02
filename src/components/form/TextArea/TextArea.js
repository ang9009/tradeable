import React from "react";
import * as Form from "@radix-ui/react-form";
import TextAreaCSS from "./TextArea.module.css";
import { toCamelCase } from "../../../utils/toCamelCase";
import InputMessage from "../InputMessage/InputMessage";

function TextArea({ className, label, placeholder, register, errors, max }) {
  // ! the "required" prop from Radix conflicts with the error object from react-hook-form so don't add it

  return (
    <Form.Field className={`input-field-container ${className}`}>
      <Form.Label className={"input-label"}>{label}</Form.Label>
      <Form.Control asChild>
        <>
          <textarea
            {...register(toCamelCase(label), {
              required: "This input is required",
              maxLength: {
                value: max,
                message: `Must be ${max} characters or less`,
              },
            })}
            className={`${TextAreaCSS["text-area"]} input`}
            placeholder={placeholder}
            autoComplete="off"
            style={{
              outline:
                errors[toCamelCase(label)] && "var(--input-warning-border)",
            }}
          />
          {errors[toCamelCase(label)] && (
            <InputMessage
              message={errors[toCamelCase(label)]?.message}
              isError
            />
          )}
        </>
      </Form.Control>
    </Form.Field>
  );
}

export default TextArea;
