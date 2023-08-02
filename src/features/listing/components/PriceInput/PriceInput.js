import * as Form from "@radix-ui/react-form";
import InputMessage from "../../../../components/form/InputMessage/InputMessage";
import { handleEPaste } from "../../utils/handleEPaste";
import PriceInputCSS from "./PriceInput.module.css";

function PriceInput({
  options: { max },
  formData: { register, errors, watch },
}) {
  const price = watch("price");

  return (
    <Form.Field className={"input-field-container"}>
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
            onPaste={(e) => handleEPaste(e)}
            onWheel={(e) => e.target.blur()}
            autoComplete="off"
            style={{
              outline: errors["price"] && "var(--input-warning-border)",
            }}
          />
          <InputMessage message={errors.price?.message} isError />
          {price === "0" && (
            <InputMessage
              message={"Your item will appear in the donated category"}
            />
          )}
        </>
      </Form.Control>
    </Form.Field>
  );
}

export default PriceInput;
