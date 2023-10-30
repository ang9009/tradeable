import { useNavigate } from "react-router-dom";
import ListingCardCSS from "./ListingCard.module.css";

function ListingCard({ listing }) {
  const navigate = useNavigate();

  return (
    <div
      className={ListingCardCSS["card-container"]}
      onClick={() => navigate(`/listing/${listing?.id}`)}
    >
      <div className={ListingCardCSS["img-container"]}>
        <img
          src={`https://storage.googleapis.com/tradeable-6ed31.appspot.com/listingImages/${listing?.id}/1`}
          alt={"Listing image"}
          className={ListingCardCSS["listing-img"]}
        />
        <div>
          <div className={ListingCardCSS["status-tag"]}>Reserved</div>
          <div className={ListingCardCSS["overlay"]}></div>
        </div>
      </div>
      <div className={ListingCardCSS["text-container"]}>
        <h1>{listing?.name}</h1>
        <p className={ListingCardCSS.condition}>{listing?.condition}</p>
        <h1>£{listing?.price}</h1>
      </div>
    </div>
  );
}

export default ListingCard;
