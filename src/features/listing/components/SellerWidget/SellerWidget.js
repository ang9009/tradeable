import { Rating } from "react-simple-star-rating";
import SellerWidgetCSS from "./SellerWidget.module.css";

function SellerWidget({ seller }) {
  return (
    <div className={SellerWidgetCSS["widget-container"]}>
      <img
        src={seller.photoUrl}
        alt=""
        className={SellerWidgetCSS["seller-img"]}
      />
      <div>
        <h1>{seller.name}</h1>
        <div className={SellerWidgetCSS["ratings-container"]}>
          <Rating initialValue={5} readonly size={"15px"} />
          <p className={SellerWidgetCSS["rating-number"]}>169 reviews</p>
        </div>
      </div>
    </div>
  );
}

export default SellerWidget;
