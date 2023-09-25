import { useEffect, useState } from "react";
import { db, doc, getDoc } from "../../../../lib/firebase";
import ChatListingInfoCSS from "./ChatListingInfo.module.css";

function ChatListingInfo({ listingId }) {
  const [listing, setListing] = useState({});

  useEffect(() => {
    function getListing() {
      const listingRef = doc(db, "listings", listingId);
      getDoc(listingRef).then((res) => {
        if (!res.exists()) {
          setListing(null);
        } else {
          setListing(res.data());
        }
      });
    }

    listingId && getListing();
  }, [listingId]);

  return (
    <div className={ChatListingInfoCSS["component-container"]}>
      <img
        src={require("../../../../assets/authmodal_img.jpg")}
        alt=""
        className={ChatListingInfoCSS["listing-img"]}
      />
      <div className={ChatListingInfoCSS["listing-details"]}>
        <p className={ChatListingInfoCSS["listing-name"]}>{listing.name}</p>
        <p className={ChatListingInfoCSS.price}>£{listing.price}</p>
      </div>
    </div>
  );
}

export default ChatListingInfo;
