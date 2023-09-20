import { useNavigate } from "react-router-dom";
import Button from "../../../../components/ui/Button/Button";

function SellerButtons({ listingId }) {
  const navigate = useNavigate();

  return (
    <>
      <Button
        options={{
          text: "View messages",
          type: "black-filled",
        }}
      />
      <Button
        options={{
          text: "Edit listing",
          type: "gray-outline",
        }}
        onClick={() => navigate(`/edit-listing/${listingId}`)}
      />
      <Button
        options={{
          text: "Mark as reserved",
          type: "gray-outline-blue",
        }}
      />
      <Button
        options={{
          text: "Mark as sold",
          type: "gray-outline-red",
        }}
      />
    </>
  );
}

export default SellerButtons;
