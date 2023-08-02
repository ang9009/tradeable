import SelectInput from "../../../../components/form/SelectInput/SelectInput";
import TextArea from "../../../../components/form/TextArea/TextArea";
import TextInput from "../../../../components/form/TextInput/TextInput";
import ItemDetailsSectionCSS from "./ItemDetailsSection.module.css";
import { conditionOptions } from "../../data/conditionOptions";
import { categoryOptions } from "../../data/categoryOptions";
import PriceInput from "../PriceInput/PriceInput";

function ItemDetailsSection({ register, control }) {
  return (
    <>
      <div className="page-section-container">
        <div className="subtitle">Item details</div>
        <div
          className={`form-section-container ${ItemDetailsSectionCSS["item-details-container"]}`}
        >
          <TextInput
            register={register}
            label={"Name"}
            placeholder={"Item name"}
            type={"text"}
          />
          <SelectInput
            label={"Condition"}
            placeholder={"Select condition"}
            control={control}
            className={ItemDetailsSectionCSS["condition-input"]}
            hasConditionHint={true}
            options={conditionOptions}
          />
          <TextArea
            register={register}
            label={"Description"}
            placeholder={
              "Describe the item’s condition, past usage, original price, meet-up preferences, etc"
            }
            type={"textarea"}
            className={ItemDetailsSectionCSS["description-input"]}
          />
          <SelectInput
            label={"Category"}
            placeholder={"Select item category"}
            control={control}
            options={categoryOptions}
          />
          <PriceInput register={register} />
        </div>
      </div>
    </>
  );
}

export default ItemDetailsSection;
