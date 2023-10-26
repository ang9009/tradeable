import { doc, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../../../../components/ui/Button/Button";
import { db } from "../../../../lib/firebase";
import SoldModal from "../../../listing/components/SoldModal/SoldModal";
import MobileChatListingInfoCSS from "./MobileChatListingInfo.module.css";

function MobileChatListingInfo({ listing, isFetchingListing, selectedChat }) {
  const navigate = useNavigate();
  const [listingStatus, setListingStatus] = useState("");
  const [soldModalIsOpen, setSoldModalIsOpen] = useState(false);

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
      toast.success("Listing marked as reserved!", { autoClose: 1500 });
    } else {
      setDoc(ref, { status: "available" }, { merge: true });
      setListingStatus("available");
      toast.success("Listing marked as available!", { autoClose: 1500 });
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
        <SoldModal
          setSoldModalIsOpen={setSoldModalIsOpen}
          soldModalIsOpen={soldModalIsOpen}
          listingId={listing?.id}
          chatId={selectedChat && selectedChat[0]}
          buyerId={selectedChat && selectedChat[1].userInfo.id}
          setListingStatus={setListingStatus}
        />
      </div>
      <div className={MobileChatListingInfoCSS["component-bottom-container"]}>
        {selectedChat?.[1].type == "selling" && listing.status !== "sold" && (
          <div className={MobileChatListingInfoCSS["seller-btns"]}>
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
                className: MobileChatListingInfoCSS["sold-btn"],
              }}
              onClick={() => setSoldModalIsOpen(true)}
            />
          </div>
        )}
        {selectedChat && listing.status == "sold" && (
          <div className={MobileChatListingInfoCSS["listing-sold-buttons"]}>
            <div className={MobileChatListingInfoCSS["listing-sold-msg"]}>
              Listing sold
            </div>
            {selectedChat?.[1].type == "selling" ? (
              <Button
                options={{
                  type: "black-filled",
                  text: "Review buyer",
                  notRounded: true,
                }}
              />
            ) : (
              <Button
                options={{
                  type: "black-filled",
                  text: "Review seller",
                  notRounded: true,
                }}
              />
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default MobileChatListingInfo;
