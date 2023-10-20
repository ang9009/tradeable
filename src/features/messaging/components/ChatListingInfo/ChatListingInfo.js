import { doc, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../../../../components/ui/Button/Button";
import { db } from "../../../../lib/firebase";
import SoldModal from "../../../listing/components/SoldModal/SoldModal";
import ChatListingInfoCSS from "./ChatListingInfo.module.css";

function ChatListingInfo({ listing, isFetchingListing, selectedChat }) {
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
          {selectedChat &&
            selectedChat[1].type == "selling" &&
            (listingStatus !== "sold" ? (
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
                  onClick={() => setSoldModalIsOpen(true)}
                />
              </div>
            ) : (
              <div className={ChatListingInfoCSS["listing-sold-msg"]}>
                Listing sold
              </div>
            ))}
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
  );
}

export default ChatListingInfo;
