import TextArea from "../../../../components/form/TextArea/TextArea";
import { descriptionInputOptions } from "../../data/ItemDetailsInputOptions";

function DescriptionSection() {
  return (
    <div className="page-section-container">
      <div className="subtitle">Description</div>
      <div className={`form-section-container`}>
        <TextArea options={descriptionInputOptions} />
      </div>
    </div>
  );
}

export default DescriptionSection;
