import { useFormContext } from "react-hook-form";
import { Link } from "react-router-dom";
import Checkbox from "../../../../components/form/Checkbox/Checkbox";
import Error from "../../../../components/ui/Error/Error";
import SearchLocationInput from "../SearchLocationInput/SearchLocationInput";
import DealingMethodsSectionCSS from "./DealingMethodsSection.module.css";

function DealingMethodsSection() {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <div className="page-section-container">
        <div className="subtitle">Dealing methods</div>
        <div className="form-section-container">
          <div className={DealingMethodsSectionCSS["exchange-input"]}>
            <Checkbox
              options={{
                label:
                  "I want my item listed as part of the NEU London-Oakland exchange program",
                name: "isExchange",
                className: DealingMethodsSectionCSS["exchange-checkbox"],
              }}
              formData={{ control }}
            />
            <Link
              to="/neu"
              target="_blank"
              className={DealingMethodsSectionCSS["hint"]}
            >
              What's this?
            </Link>
          </div>
          <Error
            show={errors?.dealingMethods}
            message={errors?.dealingMethods?.message}
          />
          <SearchLocationInput />
        </div>
        <div></div>
      </div>
    </>
  );
}

export default DealingMethodsSection;
