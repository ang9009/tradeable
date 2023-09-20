import { categoryOptions } from "./categoryOptions";
import { conditionOptions } from "./conditionOptions";

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
