import { useFormContext } from "react-hook-form";
import Error from "../../../../components/ui/Error/Error";
import SearchLocationInput from "../SearchLocationInput/SearchLocationInput";

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
          <Error
            show={errors?.dealingMethods}
            message={errors?.dealingMethods?.message}
          />
          <SearchLocationInput />
        </div>
      </div>
    </>
  );
}

export default DealingMethodsSection;
