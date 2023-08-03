import * as Form from "@radix-ui/react-form";
import { useFormContext } from "react-hook-form";
import InputMessage from "../../../../components/form/InputMessage/InputMessage";
import preventE from "../../utils/preventE";
import PriceInputCSS from "./PriceInput.module.css";

function PriceInput({ options: { max } }) {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  const price = watch("price");

  const registerSettings = {
    ...register("price", {
      required: "This input is required",
      valueAsNumber: true,
      max: {
        value: max,
        message: `Maximum price is ${max}`,
      },
    }),
  };

  return (
    <Form.Field className={"input-field-container"}>
      <Form.Label className={"input-label"}>Price</Form.Label>
      <Form.Control asChild>
        <>
          <input
            {...registerSettings}
            {...preventE}
            className={`${PriceInputCSS["price-input"]} input`}
            type="number"
            placeholder={"Enter item price (HKD)"}
            autoComplete="off"
            style={{
              outline: errors["price"] && "var(--input-warning-border)",
            }}
          />
          <InputMessage message={errors.price?.message} isError />
          {price === 0 && (
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
