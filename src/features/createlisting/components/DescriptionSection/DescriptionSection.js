import { useFormContext } from "react-hook-form";
import TextArea from "../../../../components/form/TextArea/TextArea";

function DescriptionSection() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const descriptionInputOptions = {
    label: "Description",
    placeholder:
      "Describe the item’s condition, past usage, original price, meet-up preferences, etc",
    max: 1000,
  };

  return (
    <div className="page-section-container">
      <div className="subtitle">Description</div>
      <div className={`form-section-container`}>
        <TextArea
          options={descriptionInputOptions}
          formData={{ register, errors }}
        />
      </div>
    </div>
  );
}

export default DescriptionSection;
