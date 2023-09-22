import { listAll, uploadBytes } from "firebase/storage";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../../components/ui/Button/Button";
import Modal from "../../components/ui/Modal/Modal";
import { useUser } from "../../context/UserContext";
import {
  DealingMethodsSection,
  DescriptionSection,
  FullscreenDropzone,
  ItemDetailsSection,
  PhotosSection,
} from "../../features/createlisting";
import PageContainer from "../../layouts/PageContainer/PageContainer";
import {
  db,
  deleteDoc,
  deleteObject,
  doc,
  getEditListingData,
  onSubmitListing,
  ref,
  storage,
} from "../../lib/firebase";
import EditListingCSS from "./EditListing.module.css";

function EditListing() {
  const { listingId } = useParams();
  const { user } = useUser();
  const navigate = useNavigate();
  const [submitting, setIsSubmitting] = useState(false);
  const [isFetchingListing, setIsFetchingListing] = useState(true);
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  const methods = useForm({
    mode: "onChange",
  });

  const checkKeyDown = (e) => {
    if (e.key === "Enter") e.preventDefault();
  };

  // Replacs data in form with listing data
  useEffect(() => {
    // TODO: move this into firebase.js or something
    getEditListingData(listingId, methods.reset, setIsFetchingListing);
  }, []);

  return (
    <>
      <FormProvider {...methods}>
        {!isFetchingListing && (
          <FullscreenDropzone>
            <PageContainer type={"centered"}>
              <form
                onSubmit={methods.handleSubmit(async (data) => {
                  // TODO: clean this up xd
                  setIsSubmitting(true);
                  const toastId = toast.loading(
                    "Submitting listing, please wait...",
                    { theme: "colored", position: "bottom-right" }
                  );

                  await onSubmitListing(data, listingId, user.uid);

                  const photos = data.photos.map((photoObj) => photoObj.file);
                  const promises = photos.map((photo, i) => {
                    const photoRef = ref(
                      storage,
                      `listingImages/${listingId}/${i + 1}`
                    );
                    return uploadBytes(photoRef, photo);
                  });

                  Promise.all(promises).then(() => {
                    navigate(`/listing/${listingId}`);
                    setIsSubmitting(false);
                    toast.update(toastId, {
                      render: "Changes saved!",
                      type: "success",
                      autoClose: 5000,
                      isLoading: false,
                      closeButton: true,
                      theme: "colored",
                      position: "bottom-right",
                    });
                  });
                })}
                onKeyDown={(e) => checkKeyDown(e)}
                noValidate
              >
                <h1 className="page-title">Edit listing</h1>
                <ItemDetailsSection />
                <PhotosSection />
                <DescriptionSection />
                <DealingMethodsSection />
                <div className={EditListingCSS["btns-container"]}>
                  <Button
                    options={{
                      type: "black-filled",
                      text: "Save changes",
                      className: EditListingCSS["save-btn"],
                    }}
                    disabled={submitting}
                  />
                  <Button
                    options={{
                      type: "red-outline",
                      text: "Delete listing",
                      className: EditListingCSS["submit-btn"],
                    }}
                    disabled={submitting}
                    onClick={(e) => {
                      e.preventDefault();
                      setDeleteModalIsOpen(true);
                    }}
                  />
                </div>
              </form>
            </PageContainer>
          </FullscreenDropzone>
        )}
      </FormProvider>
      {/* Delete modal */}
      <Modal
        isOpen={deleteModalIsOpen}
        handleClose={() => setDeleteModalIsOpen(false)}
        title={"Are you sure?"}
        className={EditListingCSS["delete-modal"]}
      >
        This action cannot be undone. Your item will no longer appear in the
        marketplace, and buyers will no longer be able to interact with you.
        <div className={EditListingCSS["modal-btns-container"]}>
          <Button
            options={{ type: "red-filled", text: "Delete listing" }}
            onClick={() => {
              // Delete listing function
              const storageRef = ref(storage, `listingImages/${listingId}`);

              listAll(storageRef).then((listResults) => {
                const promises = listResults.items.map((item) => {
                  return deleteObject(item);
                });

                Promise.all(promises);
              });
              deleteDoc(doc(db, "listings", listingId));
              navigate(`/profile/${user.uid}`);
              toast.success("Listing successfully deleted!", 3000);
            }}
          />
          <Button
            options={{
              type: "gray-outline",
              text: "Cancel",
              className: EditListingCSS["cancel-btn"],
            }}
            onClick={() => setDeleteModalIsOpen(false)}
          />
        </div>
      </Modal>
    </>
  );
}

{
}

export default EditListing;
