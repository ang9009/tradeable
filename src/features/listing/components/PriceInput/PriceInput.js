import * as Form from "@radix-ui/react-form";
import { handleEPaste } from "../../utils/handleEPaste";
import PriceInputCSS from "./PriceInput.module.css";
import InputMessage from "../../../../components/form/InputMessage/InputMessage";

function PriceInput({ className, register, errors, max }) {
  return (
    <Form.Field className={`input-field-container ${className}`}>
      <Form.Label className={"input-label"}>Price</Form.Label>
      <Form.Control asChild>
        <>
          <input
            {...register("price", {
              required: "This input is required",
              max: {
                value: max,
                message: `Maximum price is $${max}`,
              },
            })}
            className={`${PriceInputCSS["price-input"]} input`}
            type="number"
            placeholder={"Enter item price (HKD)"}
            onKeyDown={(e) =>
              ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()
            }
            autoComplete="off"
            onPaste={(e) => handleEPaste(e)}
            onWheel={(e) => e.target.blur()}
            style={{
              outline: errors["price"] && "var(--input-warning-border)",
            }}
          />
          <InputMessage message={errors.price?.message} isError />
        </>
      </Form.Control>
    </Form.Field>
  );
}

export default PriceInput;
