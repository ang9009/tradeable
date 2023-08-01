import PriceInput from "../PriceInput/PriceInput";
import PriceSectionCSS from "./PriceSection.module.css";

function PriceSection({ register }) {
  return (
    <>
      <div className="subtitle">Price</div>
      <div
        className={`${PriceSectionCSS["price-section-container"]} form-section-container`}
      >
        <PriceInput register={register} placeholder={"Enter item price"} />
      </div>
    </>
  );
}

export default PriceSection;
