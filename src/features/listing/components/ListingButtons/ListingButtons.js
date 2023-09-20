import Skeleton from "react-loading-skeleton";
import Button from "../../../../components/ui/Button/Button";
import { useUser } from "../../../../context/UserContext";
import SellerButtons from "../SellerButtons/SellerButtons";
import ListingButtonsCSS from "./ListingButtons.module.css";

function ListingButtons({ sellerId, listingId }) {
  const { user } = useUser();

  return (
    <div className={ListingButtonsCSS["listing-btns-container"]}>
      {user ? (
        user?.uid === sellerId ? (
          <SellerButtons listingId={listingId} />
        ) : (
          <Button
            options={{
              text: "Message seller",
              type: "black-filled",
              className: ListingButtonsCSS["msg-seller-btn"],
            }}
          />
        )
      ) : (
        <Skeleton />
      )}
    </div>
  );
}

export default ListingButtons;
