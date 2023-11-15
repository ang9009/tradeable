import { useFormContext } from "react-hook-form";
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
  const {
    register,
    watch,
    control,
    setValue,
    formState: { errors },
  } = useFormContext();

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
            formData={{ control, errors }}
          />
          <PriceInput
            options={{ max: 999 }}
            formData={{ register, watch, errors, setValue }}
          />
          <SelectInput
            options={categoryInputOptions}
            formData={{ control, errors }}
          />
        </div>
      </div>
    </>
  );
}

export default ItemDetailsSection;
