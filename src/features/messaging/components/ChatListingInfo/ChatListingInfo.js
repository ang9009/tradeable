import { doc, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useNavigate } from "react-router-dom";
import Button from "../../../../components/ui/Button/Button";
import { db } from "../../../../lib/firebase";
import ChatListingInfoCSS from "./ChatListingInfo.module.css";

function ChatListingInfo({ listing, isFetchingListing, selectedChat }) {
  const navigate = useNavigate();
  const [listingStatus, setListingStatus] = useState("");

  useEffect(() => {
    if (listing) {
      setListingStatus(listing.status);
    }
  }, [listing]);

  async function markReserved() {
    const ref = doc(db, "listings", listing.id);

    if (listingStatus === "available") {
      setDoc(ref, { status: "reserved" }, { merge: true });
      setListingStatus("reserved");
    } else {
      setDoc(ref, { status: "available" }, { merge: true });
      setListingStatus("available");
    }
  }

  return (
    <div className={ChatListingInfoCSS["component-container"]}>
      {!isFetchingListing ? (
        <>
          <div
            className={ChatListingInfoCSS["listing-data-container"]}
            onClick={() => navigate(`/listing/${listing.id}`)}
          >
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
          </div>
          {selectedChat && selectedChat[1].type == "selling" && (
            <div className={ChatListingInfoCSS["seller-btns"]}>
              <Button
                options={{
                  type: "gray-outline-blue",
                  notRounded: true,
                  text:
                    listingStatus === "available"
                      ? "Mark as reserved"
                      : "Mark as available",
                }}
                onClick={() => markReserved()}
              />
              <Button
                options={{
                  type: "gray-outline-red",
                  notRounded: true,
                  text: "Mark as sold",
                  className: ChatListingInfoCSS["sold-btn"],
                }}
              />
            </div>
          )}
        </>
      ) : (
        <Skeleton height={"50px"} />
      )}
    </div>
  );
}

export default ChatListingInfo;
