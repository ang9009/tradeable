import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../../../../components/ui/Button/Button";
import Modal from "../../../../components/ui/Modal/Modal";
import { useUser } from "../../../../context/UserContext";
import { db, doc, setDoc } from "../../../../lib/firebase";
import SellerButtonsCSS from "./SellerButtons.module.css";

function SellerButtons({ listingId, status }) {
  const navigate = useNavigate();
  const [soldModalIsOpen, setSoldModalIsOpen] = useState(false);
  const { user } = useUser();

  return (
    <>
      <Button
        options={{
          text: "View messages",
          type: "black-filled",
        }}
        onClick={() => navigate(`/messages`)}
      />
      {status !== "sold" && (
        <>
          <Button
            options={{
              text: "Edit listing",
              type: "gray-outline",
            }}
            onClick={() => navigate(`/edit-listing/${listingId}`)}
          />
          <Button
            options={{
              text:
                status === "available"
                  ? "Mark as reserved"
                  : "Mark as available",
              type: "gray-outline-blue",
            }}
            onClick={() => {
              const ref = doc(db, "listings", listingId);

              if (status === "available") {
                setDoc(ref, { status: "reserved" }, { merge: true });
              } else {
                setDoc(ref, { status: "available" }, { merge: true });
              }
            }}
          />
          <Button
            options={{
              text: "Mark as sold",
              type: "gray-outline-red",
            }}
            onClick={() => setSoldModalIsOpen(true)}
          />
        </>
      )}
      {/* Sold modal */}
      <Modal
        isOpen={soldModalIsOpen}
        handleClose={() => setSoldModalIsOpen(false)}
        title={"Are you sure?"}
        className={SellerButtonsCSS["sold-modal"]}
      >
        This action cannot be undone. Your item will no longer appear in the
        marketplace, and buyers will no longer be able to interact with you.
        <div className={SellerButtonsCSS["modal-btns-container"]}>
          <Button
            options={{ type: "red-filled", text: "Mark as sold" }}
            onClick={() => {
              const ref = doc(db, "listings", listingId);
              setDoc(ref, { status: "sold" }, { merge: true });
              setSoldModalIsOpen(false);
              toast.success("Listing marked as sold!", 3000);
            }}
          />
          <Button
            options={{
              type: "gray-outline",
              text: "Cancel",
              className: SellerButtonsCSS["cancel-btn"],
            }}
            onClick={() => setSoldModalIsOpen(false)}
          />
        </div>
      </Modal>
    </>
  );
}

export default SellerButtons;
