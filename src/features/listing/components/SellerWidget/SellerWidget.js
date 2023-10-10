import { MdVerified } from "react-icons/md";
import { Rating } from "react-simple-star-rating";
import { Tooltip } from "react-tooltip";
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
        <div className={SellerWidgetCSS["name-container"]}>
          <h1 className={SellerWidgetCSS.name}>{seller.name}</h1>
          <MdVerified
            size={"15px"}
            color={"var(--input-focus-color)"}
            data-tooltip-id="verified-tooltip"
            data-tooltip-content="User has verified their student email"
          />
          <Tooltip id="verified-tooltip" />
        </div>
        <div className={SellerWidgetCSS["ratings-container"]}>
          <Rating initialValue={5} readonly size={"15px"} />
          <p className={SellerWidgetCSS["rating-number"]}>169 reviews</p>
        </div>
      </div>
    </div>
  );
}

export default SellerWidget;
