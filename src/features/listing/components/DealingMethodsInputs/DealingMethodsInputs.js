import { useFormContext } from "react-hook-form";
import Checkbox from "../../../../components/form/Checkbox/Checkbox";
import SearchLocationInput from "../SearchLocationInput/SearchLocationInput";
import DealingMethodsInputsCSS from "./DealingMethodsInputs.module.css";

function DealingMethodsInputs() {
  const { control, watch } = useFormContext();
  const meetUpChecked = watch("dealingMethods")?.includes("meetUp");

  function validate(v) {
    // Dealing methods are saved as an array, so validate function just checks length
    return v.length !== 0 || "Please select at least one dealing method";
  }

  const checkboxOptions = {
    name: "dealingMethods",
    className: DealingMethodsInputsCSS["checkbox"],
  };

  const formData = {
    control,
    validate,
  };

  return (
    <div className={DealingMethodsInputsCSS["checkboxes-container"]}>
      <Checkbox
        options={{
          label: "Meet up",
          ...checkboxOptions,
        }}
        formData={formData}
      />
      {meetUpChecked && (
        <div className={DealingMethodsInputsCSS["location-inputs-container"]}>
          <SearchLocationInput />
        </div>
      )}
      <Checkbox
        options={{
          label: "Delivery",
          ...checkboxOptions,
        }}
        formData={formData}
      />
    </div>
  );
}

export default DealingMethodsInputs;
