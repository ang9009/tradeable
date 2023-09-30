import Skeleton from "react-loading-skeleton";
import { useNavigate } from "react-router-dom";
import ChatListingInfoCSS from "./ChatListingInfo.module.css";

function ChatListingInfo({ listing, isFetchingListing }) {
  const navigate = useNavigate();

  return (
    <div
      className={ChatListingInfoCSS["component-container"]}
      onClick={() => navigate(`/listing/${listing.id}`)}
    >
      {!isFetchingListing ? (
        <>
          <img
            src={
              listing
                ? listing.photoUrl
                : require("../../../../assets/placeholder_img.jpg")
            }
            alt=""
            className={ChatListingInfoCSS["listing-img"]}
          />
          <div className={ChatListingInfoCSS["listing-details"]}>
            <p
              className={ChatListingInfoCSS["listing-name"]}
              style={{ color: listing ? "black" : "red" }}
            >
              {listing ? listing.name : "Listing removed"}
            </p>
            {listing && (
              <p className={ChatListingInfoCSS.price}>£{listing.price}</p>
            )}
          </div>
        </>
      ) : (
        <Skeleton height={"50px"} />
      )}
    </div>
  );
}

export default ChatListingInfo;
