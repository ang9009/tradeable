import InputMessage from "../../../../components/form/InputMessage/InputMessage";
import preventE from "../../utils/preventE";
import PriceInputCSS from "./PriceInput.module.css";

function PriceInput({
  options: { max },
  formData: { register, watch, errors },
}) {
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
    <div className={"input-field-container"}>
      <label className={"input-label"} htmlFor={"price"}>
        Price
      </label>
      <input
        {...registerSettings}
        {...preventE}
        id={"price"}
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
    </div>
  );
}

export default PriceInput;
