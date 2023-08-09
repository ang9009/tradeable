import { useState } from "react";
import InputMessage from "../../../../components/form/InputMessage/InputMessage";
import handleOutline from "../../../../utils/handleOutline";
import preventE from "../../utils/preventE";
import PriceInputCSS from "./PriceInput.module.css";

function PriceInput({
  options: { max },
  formData: { register, watch, errors, setValue },
}) {
  const price = watch("price");
  const [isFocused, setIsFocused] = useState(false);

  const registerSettings = {
    ...register("price", {
      required: "This input is required",
      onBlur: (e) => {
        if (e.target?.value.toString().includes(".")) {
          const fixed = parseFloat(e.target.value).toFixed(2);
          setValue("price", fixed);
        }
      },
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
      <div
        className={"input-wrapper"}
        style={{
          outline: handleOutline(errors?.price, isFocused),
        }}
      >
        <p className={PriceInputCSS["dollar-sign"]}>$</p>
        <input
          className={PriceInputCSS["price-input"]}
          {...registerSettings}
          {...preventE}
          id={"price"}
          type="number"
          placeholder={"Enter item price (HKD)"}
          autoComplete="off"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <InputMessage message={errors.price?.message} isError />
        {price === 0 && (
          <InputMessage
            message={"Your item will appear in the donated category"}
          />
        )}
      </div>
    </div>
  );
}

export default PriceInput;
