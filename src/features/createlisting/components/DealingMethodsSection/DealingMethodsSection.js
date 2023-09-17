import { useFormContext } from "react-hook-form";
import SelectInput from "../../../../components/form/SelectInput/SelectInput";
import Error from "../../../../components/ui/Error/Error";
import { meetUpOptions } from "../../data/meetUpOptions";

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
          <SelectInput
            options={{
              label: "Meet up locations",
              placeholder: "Select meet up location(s)",
              selectOptions: meetUpOptions,
              isMulti: true,
            }}
            formData={{ control, errors }}
          />
        </div>
      </div>
    </>
  );
}

export default DealingMethodsSection;
