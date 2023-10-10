import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../../../../components/ui/Button/Button";
import { useUser } from "../../../../context/UserContext";
import { createChat } from "../../../../lib/firebase";
import getChatId from "../../../../utils/getChatId";
import AuthModal from "../../../auth/components/AuthModal/AuthModal";
import SellerButtons from "../SellerButtons/SellerButtons";
import ListingButtonsCSS from "./ListingButtons.module.css";

function ListingButtons({ sellerId, listingId, status }) {
  const { user, isFetchingUser } = useUser();
  const navigate = useNavigate();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    // If user is logged out, display non-seller buttons. If user is logged in,
    // check if they are the seller and display accordingly
    <div className={ListingButtonsCSS["listing-btns-container"]}>
      {isFetchingUser ? (
        <Skeleton />
      ) : user?.uid === sellerId ? (
        <SellerButtons listingId={listingId} status={status} />
      ) : (
        <Button
          options={{
            text: "Message seller",
            type: "black-filled",
            className: ListingButtonsCSS["msg-seller-btn"],
            notRounded: true,
          }}
          onClick={() => {
            if (!user) {
              setIsAuthModalOpen(true);
              return;
            }

            if (status == "available") {
              createChat(user, sellerId, listingId).then(() => {
                navigate(
                  `/messages/${getChatId(user.uid, sellerId, listingId)}`
                );
              });
            } else if (status === "reserved") {
              toast.error("Listing has been reserved", 3000);
            } else {
              toast.error("Listing sold", 3000);
            }
          }}
        />
      )}
      <AuthModal
        isAuthModalOpen={isAuthModalOpen}
        setIsAuthModalOpen={setIsAuthModalOpen}
      />
    </div>
  );
}

export default ListingButtons;
