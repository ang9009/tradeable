import SelectInput from "../../../../components/form/SelectInput/SelectInput";
import TextArea from "../../../../components/form/TextArea/TextArea";
import TextInput from "../../../../components/form/TextInput/TextInput";
import {
  categoryInputOptions,
  conditionInputOptions,
  descriptionInputOptions,
  nameInputOptions,
  priceInputOptions,
} from "../../data/ItemDetailsInputOptions";
import PriceInput from "../PriceInput/PriceInput";
import ItemDetailsSectionCSS from "./ItemDetailsSection.module.css";

function ItemDetailsSection({
  formData: { register, control, errors, watch },
}) {
  return (
    <>
      <div className="page-section-container">
        <div className="subtitle">Item details</div>
        <div
          className={`form-section-container ${ItemDetailsSectionCSS["item-details-container"]}`}
        >
          <TextInput
            options={nameInputOptions}
            formData={{ register, errors }}
          />
          <SelectInput
            options={conditionInputOptions}
            formData={{ errors, control }}
          />
          <TextArea
            options={descriptionInputOptions}
            formData={{ register, errors }}
          />
          <SelectInput
            options={categoryInputOptions}
            formData={{ errors, control }}
          />
          <PriceInput
            options={priceInputOptions}
            formData={{ register, errors, watch }}
          />
        </div>
      </div>
    </>
  );
}

export default ItemDetailsSection;
