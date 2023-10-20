import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../../components/ui/Button/Button";

function SellerButtons({ listingId, status }) {
  const navigate = useNavigate();
  const [soldModalIsOpen, setSoldModalIsOpen] = useState(false);

  return (
    <>
      <Button
        options={{
          text: "View messages",
          type: "black-filled",
          notRounded: true,
        }}
        onClick={() => navigate(`/messages`)}
      />
      {status !== "sold" && (
        <Button
          options={{
            text: "Edit listing",
            type: "gray-outline",
            notRounded: true,
          }}
          onClick={() => navigate(`/edit-listing/${listingId}`)}
        />
      )}
    </>
  );
}

export default SellerButtons;
