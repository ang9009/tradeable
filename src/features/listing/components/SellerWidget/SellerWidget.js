import { useEffect, useState } from "react";
import { MdVerified } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import { Tooltip } from "react-tooltip";
import checkImage from "../../../../utils/checkImage";
import SellerWidgetCSS from "./SellerWidget.module.css";

function SellerWidget({ seller }) {
  const navigate = useNavigate();
  const [userPhoto, setUserPhoto] = useState(
    require("../../../../assets/profile_placeholder.png")
  );

  useEffect(() => {
    const userPhotoUrl = `https://storage.googleapis.com/tradeable-6ed31.appspot.com/profileImages/${seller.id}`;

    checkImage(userPhotoUrl).then((userPhotoExists) => {
      if (userPhotoExists) {
        setUserPhoto(userPhotoUrl);
      } else {
        setUserPhoto(require("../../../../assets/profile_placeholder.png"));
      }
    });
  }, [seller.id]);

  function addS(reviews) {
    if (reviews !== 1) {
      return "s";
    }
  }

  return (
    <div
      className={SellerWidgetCSS["widget-container"]}
      onClick={() => navigate(`/profile/${seller.id}/listings`)}
    >
      <img src={userPhoto} alt="" className={SellerWidgetCSS["seller-img"]} />
      <div>
        <div className={SellerWidgetCSS["name-container"]}>
          <h1 className={SellerWidgetCSS.name}>{seller.name}</h1>
          {seller?.isVerified && (
            <MdVerified
              size={"15px"}
              color={"var(--verified-color)"}
              data-tooltip-id="verified-tooltip"
              data-tooltip-content="User has verified their student email"
            />
          )}
          <Tooltip id="verified-tooltip" />
        </div>
        <div className={SellerWidgetCSS["ratings-container"]}>
          <Rating
            initialValue={seller?.avgRating}
            readonly
            size={"15px"}
            fillColor={"var(--tradeable-burgundy)"}
          />
          <p className={SellerWidgetCSS["rating-number"]}>
            {seller?.reviews} review{addS(seller?.reviews)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SellerWidget;
