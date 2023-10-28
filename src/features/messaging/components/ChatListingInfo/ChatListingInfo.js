import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useNavigate } from "react-router-dom";
import Button from "../../../../components/ui/Button/Button";
import { useUser } from "../../../../context/UserContext";
import { db } from "../../../../lib/firebase";
import SoldModal from "../../../listing/components/SoldModal/SoldModal";
import ReviewModal from "../ReviewModal/ReviewModal";
import ChatListingInfoCSS from "./ChatListingInfo.module.css";

function ChatListingInfo({ listing, isFetchingListing, selectedChat }) {
  const navigate = useNavigate();
  const [soldModalIsOpen, setSoldModalIsOpen] = useState(false);
  const [reviewModalIsOpen, setReviewModalIsOpen] = useState(false);
  const { user } = useUser();

  async function markReserved() {
    const ref = doc(db, "listings", listing.id);

    if (listing?.status === "available") {
      await setDoc(ref, { status: "reserved" }, { merge: true });
      window.location.reload(true);
    } else {
      await setDoc(ref, { status: "available" }, { merge: true });
      window.location.reload(true);
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
          {selectedChat?.[1].type == "selling" &&
            listing?.status !== "sold" && (
              <div className={ChatListingInfoCSS["seller-btns"]}>
                <Button
                  options={{
                    type: "gray-outline-blue",
                    notRounded: true,
                    text:
                      listing?.status === "available"
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
                  onClick={() => setSoldModalIsOpen(true)}
                />
              </div>
            )}

          {/* Review buttons */}
          {selectedChat && listing?.status === "sold" && (
            <div className={ChatListingInfoCSS["listing-sold-buttons"]}>
              <div className={ChatListingInfoCSS["listing-sold-msg"]}>
                Listing sold
              </div>
              {/* If chat type selling and seller has not reviewed or if the user is buying the item and
               vice versa, show review button */}
              {((selectedChat?.[1].type === "selling" &&
                !listing?.sellerHasReviewed) ||
                (selectedChat?.[1].type === "buying" &&
                  !listing?.buyerHasReviewed &&
                  listing?.buyerId === user.id)) && (
                <Button
                  options={{
                    type: "black-filled",
                    text: "Leave review",
                    notRounded: true,
                    className: ChatListingInfoCSS["review-btn"],
                  }}
                  onClick={() => setReviewModalIsOpen(true)}
                />
              )}
              {/* The same thing, except if they have reviewed, show the review submitted message */}
              {((selectedChat?.[1].type === "selling" &&
                listing?.sellerHasReviewed) ||
                (selectedChat?.[1].type === "buying" &&
                  listing?.buyerHasReviewed &&
                  listing?.buyerId === user.id)) && (
                <div className={ChatListingInfoCSS["listing-sold-msg"]}>
                  , review submitted
                </div>
              )}
            </div>
          )}
        </>
      ) : (
        <Skeleton height={"50px"} />
      )}
      <SoldModal
        setSoldModalIsOpen={setSoldModalIsOpen}
        soldModalIsOpen={soldModalIsOpen}
        listingId={listing?.id}
        chatId={selectedChat && selectedChat[0]}
        buyerId={selectedChat && selectedChat[1].userInfo.id}
      />
      <ReviewModal
        setReviewModalIsOpen={setReviewModalIsOpen}
        reviewModalIsOpen={reviewModalIsOpen}
        selectedChat={selectedChat}
      />
    </div>
  );
}

export default ChatListingInfo;
