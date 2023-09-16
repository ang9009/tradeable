import { Rating } from "react-simple-star-rating";
import SellerWidgetCSS from "./SellerWidget.module.css";

function SellerWidget() {
  return (
    <div className={SellerWidgetCSS["widget-container"]}>
      <img
        src={require("../../../../assets/authmodal_img.jpeg")}
        alt=""
        className={SellerWidgetCSS["seller-img"]}
      />
      <div>
        <h1>Colin Chau</h1>
        <div className={SellerWidgetCSS["ratings-container"]}>
          <Rating initialValue={5} readonly size={"15px"} />
          <p className={SellerWidgetCSS["rating-number"]}>169 reviews</p>
        </div>
      </div>
    </div>
  );
}

export default SellerWidget;
