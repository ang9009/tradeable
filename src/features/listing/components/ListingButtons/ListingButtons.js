import Skeleton from "react-loading-skeleton";
import Button from "../../../../components/ui/Button/Button";
import { useUser } from "../../../../context/UserContext";
import ListingButtonsCSS from "./ListingButtons.module.css";

function ListingButtons({ sellerId }) {
  const { user } = useUser();

  return (
    <>
      {user ? (
        user?.uid === sellerId ? (
          <Button
            options={{
              text: "Edit listing",
              type: "black-filled",
              className: ListingButtonsCSS["msg-seller-btn"],
            }}
          />
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
    </>
  );
}

export default ListingButtons;
