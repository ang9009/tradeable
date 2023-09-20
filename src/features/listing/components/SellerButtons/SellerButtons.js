import Button from "../../../../components/ui/Button/Button";
import SellerButtonsCSS from "./SellerButtons.module.css";

function SellerButtons() {
  return (
    <>
      <Button
        options={{
          text: "View messages",
          type: "black-filled",
          className: SellerButtonsCSS["msg-seller-btn"],
        }}
      />
      <Button
        options={{
          text: "Edit listing",
          type: "gray-outline",
          className: SellerButtonsCSS["msg-seller-btn"],
        }}
      />
      <Button
        options={{
          text: "Mark as reserved",
          type: "gray-outline-blue",
          className: SellerButtonsCSS["msg-seller-btn"],
        }}
      />
      <Button
        options={{
          text: "Mark as sold",
          type: "gray-outline-red",
          className: SellerButtonsCSS["msg-seller-btn"],
        }}
      />
    </>
  );
}

export default SellerButtons;
