import Skeleton from "react-loading-skeleton";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../../../../components/ui/Button/Button";
import { useUser } from "../../../../context/UserContext";
import { createChat } from "../../../../lib/firebase";
import getChatId from "../../../../utils/getChatId";
import SellerButtons from "../SellerButtons/SellerButtons";
import ListingButtonsCSS from "./ListingButtons.module.css";

function ListingButtons({ sellerId, listingId, status }) {
  const { user, isFetchingUser } = useUser();
  const navigate = useNavigate();

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
          disabled={!user}
          onClick={() => {
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
    </div>
  );
}

export default ListingButtons;
