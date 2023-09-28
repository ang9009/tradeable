import Skeleton from "react-loading-skeleton";
import ChatListingInfoCSS from "./ChatListingInfo.module.css";

function ChatListingInfo({ listing, isFetchingListing }) {
  return (
    <div className={ChatListingInfoCSS["component-container"]}>
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
