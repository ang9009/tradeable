import { doc, setDoc, updateDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import Button from "../../../../components/ui/Button/Button";
import Modal from "../../../../components/ui/Modal/Modal";
import { useUser } from "../../../../context/UserContext";
import { db } from "../../../../lib/firebase";
import SoldModalCSS from "./SoldModal.module.css";

function SoldModal({
  soldModalIsOpen,
  setSoldModalIsOpen,
  listingId,
  buyerId,
  setListingStatus,
  chatId,
  isMobile,
}) {
  const { user } = useUser();

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
            type: "burgundy-filled",
            text: "Mark as sold",
            notRounded: true,
          }}
          onClick={async () => {
            // Updating listing buyerId
            const ref = doc(db, "listings", listingId);
            await setDoc(
              ref,
              {
                status: "sold",
                buyerId: buyerId,
              },
              {
                merge: true,
              }
            );

            // Updating buyer and seller userChat objects
            await updateDoc(doc(db, "userChats", user.id), {
              [chatId + ".listing"]: {
                id: listingId,
                buyerId: buyerId,
              },
            });

            await updateDoc(doc(db, "userChats", buyerId), {
              [chatId + ".listing"]: {
                id: listingId,
                buyerId: buyerId,
              },
            });

            setSoldModalIsOpen(false);
            toast.success("Listing marked as sold", { autoClose: 3000 });
            setListingStatus("sold");
            isMobile && window.location.reload(true);
          }}
        />
        <Button
          options={{
            type: "gray-outline",
            text: "Cancel",
            notRounded: true,
            className: SoldModalCSS["cancel-btn"],
          }}
          onClick={() => setSoldModalIsOpen(false)}
        />
      </div>
    </Modal>
  );
}

export default SoldModal;
