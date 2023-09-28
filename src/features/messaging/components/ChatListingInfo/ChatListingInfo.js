import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import {
  db,
  doc,
  getDoc,
  getDownloadURL,
  ref,
  storage,
} from "../../../../lib/firebase";
import ChatListingInfoCSS from "./ChatListingInfo.module.css";

function ChatListingInfo({ listingId }) {
  const [listing, setListing] = useState({});
  const [isFetchingListing, setIsFetchingListing] = useState(true);

  // TODO: dogshit
  useEffect(() => {
    function getListing() {
      const listingRef = doc(db, "listings", listingId);
      getDoc(listingRef).then((res) => {
        if (!res.exists()) {
          setListing(null);
          setIsFetchingListing(false);
        } else {
          setListing(res.data());
          const imageRef = ref(storage, `listingImages/${listingId}/1`);
          getDownloadURL(imageRef).then((res) => {
            setListing((prev) => ({ ...prev, photoUrl: res }));
            setIsFetchingListing(false);
          });
        }
      });
    }

    listingId && getListing();
  }, [listingId]);

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
