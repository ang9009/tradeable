import { doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import Button from "../../../../components/ui/Button/Button";
import Modal from "../../../../components/ui/Modal/Modal";
import { db } from "../../../../lib/firebase";
import SoldModalCSS from "./SoldModal.module.css";

export function SoldModal({
  soldModalIsOpen,
  setSoldModalIsOpen,
  listingId,
  setListingStatus,
}) {
  return (
    <Modal
      isOpen={soldModalIsOpen}
      handleClose={() => setSoldModalIsOpen(false)}
      title={"Are you sure?"}
      className={SoldModalCSS["sold-modal"]}
    >
      This action cannot be undone. Your item will no longer appear in the
      marketplace, and buyers will no longer be able to interact with you.
      <div className={SoldModalCSS["modal-btns-container"]}>
        <Button
          options={{
            type: "red-filled",
            text: "Mark as sold",
          }}
          onClick={() => {
            const ref = doc(db, "listings", listingId);
            setDoc(
              ref,
              {
                status: "sold",
              },
              {
                merge: true,
              }
            );
            setSoldModalIsOpen(false);
            setListingStatus && setListingStatus("sold");
            toast.success("Listing marked as sold!", 3000);
          }}
        />
        <Button
          options={{
            type: "gray-outline",
            text: "Cancel",
            className: SoldModalCSS["cancel-btn"],
          }}
          onClick={() => setSoldModalIsOpen(false)}
        />
      </div>
    </Modal>
  );
}
