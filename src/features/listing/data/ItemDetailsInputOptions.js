import { categoryOptions } from "./categoryOptions";
import { conditionOptions } from "./conditionOptions";
import ItemDetailsSectionCSS from "../components/ItemDetailsSection/ItemDetailsSection.module.css";

export const nameInputOptions = {
  label: "Name",
  placeholder: "Item name",
  max: 60,
};

export const conditionInputOptions = {
  label: "Condition",
  placeholder: "Select condition",
  hasConditionHint: true,
  selectOptions: conditionOptions,
};

export const categoryInputOptions = {
  label: "Category",
  placeholder: "Select item category",
  selectOptions: categoryOptions,
};

export const descriptionInputOptions = {
  label: "Description",
  placeholder:
    "Describe the item’s condition, past usage, original price, meet-up preferences, etc",
  className: ItemDetailsSectionCSS["description-input"],
  max: 1000,
};
