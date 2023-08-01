import * as Form from "@radix-ui/react-form";
import { handleEPaste } from "../../utils/handleEPaste";

function PriceInput({ className, register }) {
  return (
    <Form.Field className={`input-field-container ${className}`}>
      <Form.Label className={"input-label"}>Price</Form.Label>
      <Form.Control className={"input"} asChild>
        <input
          {...register("price")}
          type="number"
          min="0"
          max="99999"
          placeholder={"Enter item price (HKD)"}
          // The number input accepts "e" for exponents so this must be prevented
          onKeyDown={(e) =>
            ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()
          }
          onPaste={(e) => handleEPaste(e)}
          required
        />
      </Form.Control>
    </Form.Field>
  );
}

export default PriceInput;
