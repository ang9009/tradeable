import { useFormContext } from "react-hook-form";
import Error from "../../../../components/ui/Error/Error";
import Checkbox from "./../../../../components/form/Checkbox/Checkbox";
import DealingMethodsSectionCSS from "./DealingMethodsSection.module.css";

function DealingMethodsSection() {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const deliveryMethods = ["Meet up", "Delivery"];
  function validate(v) {
    return v.length !== 0 || "Please select at least one dealing method";
  }

  return (
    <>
      <div className="page-section-container">
        <div className="subtitle">Dealing methods</div>
        <div className="form-section-container">
          <Error
            show={errors?.dealingMethod}
            message={errors?.dealingMethod?.message}
          />
          <p className={DealingMethodsSectionCSS["hint"]}>
            At least one dealing method must be picked
          </p>
          <div className={DealingMethodsSectionCSS["checkboxes-container"]}>
            {deliveryMethods.map((method) => {
              return (
                <Checkbox
                  key={method}
                  options={{
                    label: method,
                    name: "dealingMethod",
                    className: DealingMethodsSectionCSS["checkbox"],
                  }}
                  formData={{
                    control,
                    validate,
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default DealingMethodsSection;
