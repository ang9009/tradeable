import { useFormContext } from "react-hook-form";
import Error from "../../../../components/ui/Error/Error";
import DealingMethodsInputs from "../DealingMethodsInputs/DealingMethodsInputs";
import DealingMethodsSectionCSS from "./DealingMethodsSection.module.css";

function DealingMethodsSection() {
  const {
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <div className="page-section-container">
        <div className="subtitle">Dealing methods</div>
        <div className="form-section-container">
          <Error
            show={errors?.dealingMethods}
            message={errors?.dealingMethods?.message}
          />
          <p className={DealingMethodsSectionCSS["hint"]}>
            At least one dealing method must be picked
          </p>
          <DealingMethodsInputs />
        </div>
      </div>
    </>
  );
}

export default DealingMethodsSection;
