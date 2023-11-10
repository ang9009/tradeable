import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../../../../components/ui/Button/Button";
import { useUser } from "../../../../context/UserContext";
import { createChat } from "../../../../lib/firebase";
import getChatId from "../../../../utils/getChatId";
import ReportModal from "../../../messaging/components/ReportModal/ReportModal";
import SellerButtons from "../SellerButtons/SellerButtons";
import ListingButtonsCSS from "./ListingButtons.module.css";

function ListingButtons({ sellerId, listingId, status, listingName }) {
  const { user, isFetchingUser } = useUser();
  const [reportModalIsOpen, setReportModalIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    // If user is logged out, display non-seller buttons. If user is logged in,
    // check if they are the seller and display accordingly
    <div className={ListingButtonsCSS["listing-btns-container"]}>
      {isFetchingUser ? (
        <Skeleton />
      ) : user?.id === sellerId ? (
        <SellerButtons listingId={listingId} status={status} />
      ) : (
        <>
          <Button
            options={{
              text: "Message seller",
              type: "black-filled",
              className: ListingButtonsCSS["msg-seller-btn"],
              notRounded: true,
            }}
            onClick={() => {
              if (!user) {
                navigate("/login");
                return;
              }

              if (status == "available") {
                createChat(user, sellerId, listingId, listingName).then(() => {
                  navigate(
                    `/messages/${getChatId(user.id, sellerId, listingId)}`
                  );
                });
              } else if (status === "reserved") {
                toast.error("Listing has been reserved", 3000);
              } else {
                toast.error("Listing sold", 3000);
              }
            }}
          />
          <Button
            options={{
              text: "Report listing",
              type: "gray-outline",
              className: ListingButtonsCSS["msg-seller-btn"],
              notRounded: true,
            }}
            onClick={() => {
              user ? setReportModalIsOpen(true) : navigate("/signup");
            }}
          />
        </>
      )}
      <ReportModal
        reportModalIsOpen={reportModalIsOpen}
        setReportModalIsOpen={setReportModalIsOpen}
        reportedUserId={sellerId}
      />
    </div>
  );
}

export default ListingButtons;
