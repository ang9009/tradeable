import * as Form from "@radix-ui/react-form";
import { handleEPaste } from "../../utils/handleEPaste";
import PriceInputCSS from "./PriceInput.module.css";

function PriceInput({ className, register }) {
  return (
    <Form.Field className={`input-field-container ${className}`}>
      <Form.Label className={"input-label"}>Price</Form.Label>
      <Form.Control className={"input"} asChild>
        <input
          {...register("price")}
          className={PriceInputCSS["price-input"]}
          type="number"
          min="0"
          max="9999"
          placeholder={"Enter item price (HKD)"}
          // The number input accepts "e" for exponents so this must be prevented
          onKeyDown={(e) =>
            ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()
          }
          autoComplete="off"
          onPaste={(e) => handleEPaste(e)}
          // Disables default scrolling
          onWheel={(e) => e.target.blur()}
          required
        />
      </Form.Control>
    </Form.Field>
  );
}

export default PriceInput;
