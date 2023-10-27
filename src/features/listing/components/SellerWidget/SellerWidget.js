import { MdVerifiedUser } from "react-icons/md";
import { Rating } from "react-simple-star-rating";
import { Tooltip } from "react-tooltip";
import SellerWidgetCSS from "./SellerWidget.module.css";

function SellerWidget({ seller }) {
  function addS(reviews) {
    if (reviews !== 1) {
      return "s";
    }
  }

  return (
    <div className={SellerWidgetCSS["widget-container"]}>
      <img
        src={
          seller.photoUrl ||
          require("../../../../assets/profile_placeholder.png")
        }
        alt=""
        className={SellerWidgetCSS["seller-img"]}
      />
      <div>
        <div className={SellerWidgetCSS["name-container"]}>
          <h1 className={SellerWidgetCSS.name}>{seller.name}</h1>
          {seller?.isVerified && (
            <MdVerifiedUser
              size={"15px"}
              color={"black"}
              data-tooltip-id="verified-tooltip"
              data-tooltip-content="User has verified their student email"
            />
          )}
          <Tooltip id="verified-tooltip" />
        </div>
        <div className={SellerWidgetCSS["ratings-container"]}>
          <Rating initialValue={5} readonly size={"15px"} />
          <p className={SellerWidgetCSS["rating-number"]}>
            {seller?.reviews} review{addS(seller?.reviews)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SellerWidget;
