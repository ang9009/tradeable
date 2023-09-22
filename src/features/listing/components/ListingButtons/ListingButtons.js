import Skeleton from "react-loading-skeleton";
import Button from "../../../../components/ui/Button/Button";
import { useUser } from "../../../../context/UserContext";
import SellerButtons from "../SellerButtons/SellerButtons";
import ListingButtonsCSS from "./ListingButtons.module.css";

function ListingButtons({ sellerId, listingId, status }) {
  const { user, isFetchingUser } = useUser();

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
          }}
          disabled={status === "reserved" || status === "sold"}
        />
      )}
    </div>
  );
}

export default ListingButtons;
