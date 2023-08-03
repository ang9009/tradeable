import SelectInput from "../../../../components/form/SelectInput/SelectInput";
import TextInput from "../../../../components/form/TextInput/TextInput";
import {
  categoryInputOptions,
  conditionInputOptions,
  nameInputOptions,
} from "../../data/ItemDetailsInputOptions";
import PriceInput from "../PriceInput/PriceInput";
import ItemDetailsSectionCSS from "./ItemDetailsSection.module.css";

function ItemDetailsSection() {
  return (
    <>
      <div className="page-section-container">
        <div className="subtitle">Item details</div>
        <div
          className={`form-section-container ${ItemDetailsSectionCSS["item-details-container"]}`}
        >
          <TextInput options={nameInputOptions} />
          <SelectInput options={conditionInputOptions} />
          <PriceInput options={{ max: 99999 }} />
          <SelectInput options={categoryInputOptions} />
        </div>
      </div>
    </>
  );
}

export default ItemDetailsSection;
