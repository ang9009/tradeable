import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useNavigate } from "react-router-dom";
import Button from "../../../../components/ui/Button/Button";
import { db } from "../../../../lib/firebase";
import SoldModal from "../../../listing/components/SoldModal/SoldModal";
import ReviewModal from "../ReviewModal/ReviewModal";
import MobileChatListingInfoCSS from "./MobileChatListingInfo.module.css";

function MobileChatListingInfo({ listing, isFetchingListing, selectedChat }) {
  const navigate = useNavigate();
  const [soldModalIsOpen, setSoldModalIsOpen] = useState(false);
  const [reviewModalIsOpen, setReviewModalIsOpen] = useState(false);

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
    <>
      <div className={MobileChatListingInfoCSS["component-top-container"]}>
        {!isFetchingListing ? (
          <>
            <div
              className={MobileChatListingInfoCSS["listing-data-container"]}
              onClick={() => navigate(`/listing/${listing.id}`)}
            >
              <img
                src={
                  listing
                    ? listing.photoUrl
                    : require("../../../../assets/placeholder_img.jpg")
                }
                alt=""
                className={MobileChatListingInfoCSS["listing-img"]}
              />
              <div className={MobileChatListingInfoCSS["listing-details"]}>
                <p
                  className={MobileChatListingInfoCSS["listing-name"]}
                  style={{ color: listing ? "black" : "red" }}
                >
                  {listing ? listing.name : "Listing removed"}
                </p>
                {listing && (
                  <p className={MobileChatListingInfoCSS.price}>
                    £{listing.price}
                  </p>
                )}
              </div>
            </div>
          </>
        ) : (
          <Skeleton height={"50px"} />
        )}
      </div>
      <div className={MobileChatListingInfoCSS["component-bottom-container"]}>
        {selectedChat?.[1].type == "selling" && listing?.status !== "sold" && (
          <div className={MobileChatListingInfoCSS["seller-btns"]}>
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
                className: MobileChatListingInfoCSS["sold-btn"],
              }}
              onClick={() => setSoldModalIsOpen(true)}
            />
          </div>
        )}
        {selectedChat && listing?.status == "sold" && (
          <div className={MobileChatListingInfoCSS["listing-sold-buttons"]}>
            <div className={MobileChatListingInfoCSS["listing-sold-msg"]}>
              Listing sold
            </div>
            {(selectedChat?.[1].type === "selling" &&
              !listing?.sellerHasReviewed) ||
            (selectedChat?.[1].type === "buying" &&
              !listing?.buyerHasReviewed) ? (
              <Button
                options={{
                  type: "black-filled",
                  text: "Leave review",
                  notRounded: true,
                  className: MobileChatListingInfoCSS["review-btn"],
                }}
                onClick={() => setReviewModalIsOpen(true)}
              />
            ) : (
              <div className={MobileChatListingInfoCSS["listing-sold-msg"]}>
                , review submitted
              </div>
            )}
          </div>
        )}
      </div>

      {/* Modals */}
      <SoldModal
        setSoldModalIsOpen={setSoldModalIsOpen}
        soldModalIsOpen={soldModalIsOpen}
        listingId={listing?.id}
        chatId={selectedChat && selectedChat[0]}
        buyerId={selectedChat && selectedChat[1].userInfo.id}
        isMobile
      />
      <ReviewModal
        setReviewModalIsOpen={setReviewModalIsOpen}
        reviewModalIsOpen={reviewModalIsOpen}
        selectedChat={selectedChat}
        listing={listing}
      />
    </>
  );
}

export default MobileChatListingInfo;
