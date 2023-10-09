import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../../components/ui/Button/Button";
import { db, doc, setDoc } from "../../../../lib/firebase";
import { SoldModal } from "./../SoldModal/SoldModal";

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
        <>
          <Button
            options={{
              text: "Edit listing",
              type: "gray-outline",
              notRounded: true,
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
              notRounded: true,
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
              notRounded: true,
            }}
            onClick={() => setSoldModalIsOpen(true)}
          />
        </>
      )}
      {/* Sold modal */}
      <SoldModal
        soldModalIsOpen={soldModalIsOpen}
        setSoldModalIsOpen={setSoldModalIsOpen}
        listingId={listingId}
      />
    </>
  );
}

export default SellerButtons;
