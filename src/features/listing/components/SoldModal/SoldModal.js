import { doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import Button from "../../../../components/ui/Button/Button";
import Modal from "../../../../components/ui/Modal/Modal";
import { db } from "../../../../lib/firebase";
import SoldModalCSS from "./SoldModal.module.css";

function SoldModal({
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
      This action cannot be undone. Buyers will no longer be able to interact
      with you. Both you and the user that you are selling your item to will be
      able to make reviews for each other.
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
            toast.success("Listing marked as sold", { autoClose: 1500 });
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

export default SoldModal;
