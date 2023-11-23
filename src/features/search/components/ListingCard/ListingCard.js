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
        {listing?.status !== "available" ? (
          <div>
            <div
              className={ListingCardCSS["status-tag"]}
              style={{
                background:
                  listing?.status === "reserved"
                    ? "var(--reserved-blue)"
                    : "#fff",
                color: listing?.status === "reserved" ? "#fff" : "#000",
              }}
            >
              {listing?.status}
            </div>
            <div className={ListingCardCSS["overlay"]}></div>
          </div>
        ) : (
          <div className={ListingCardCSS["gradient-overlay"]}></div>
        )}
      </div>
      <div className={ListingCardCSS["text-container"]}>
        <div className={ListingCardCSS["name-and-condition"]}>
          <p className={ListingCardCSS["listing-name"]}>{listing?.name}</p>
          <p className={ListingCardCSS.condition}>{listing?.condition}</p>
        </div>
        <h1 className={ListingCardCSS["price"]}>£{listing?.price}</h1>
      </div>
    </div>
  );
}

export default ListingCard;
