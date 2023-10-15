import { uploadBytes } from "firebase/storage";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../../components/ui/Button/Button";
import { useUser } from "../../context/UserContext";
import {
  ItemDetailsSection,
  PhotosSection,
} from "../../features/createlisting";
import DealingMethodsSection from "../../features/createlisting/components/DealingMethodsSection/DealingMethodsSection";
import DescriptionSection from "../../features/createlisting/components/DescriptionSection/DescriptionSection";
import FullscreenDropzone from "../../features/createlisting/components/FullscreenDropzone/FullscreenDropzone";
import PageContainer from "../../layouts/PageContainer/PageContainer";
import { onSubmitListing, ref, storage } from "../../lib/firebase";
import getId from "../../utils/getId";
import CreateListingCSS from "./CreateListing.module.css";

function CreateListing() {
  const methods = useForm({ mode: "onChange" });
  const { user, userData } = useUser();
  const navigate = useNavigate();
  const checkKeyDown = (e) => {
    if (e.key === "Enter") e.preventDefault();
  };
  const [submitting, setIsSubmitting] = useState(false);

  return (
    <FormProvider {...methods}>
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

              const listingId = getId();
              await onSubmitListing(data, listingId, user.id);

              // Uplaoding photos
              const photos = data.photos.map((photoObj) => photoObj.file);
              const promises = photos.map((photo, i) => {
                const photoRef = ref(
                  storage,
                  `listingImages/${listingId}/${i + 1}`
                );
                return uploadBytes(photoRef, photo);
              });

              // Navigating AFTER photos are submitted
              Promise.all(promises).then(() => {
                navigate(`/listing/${listingId}`);
                setIsSubmitting(false);
                toast.update(toastId, {
                  render: "Your listing is live!",
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
            <h1 className="page-title">Create a new listing</h1>
            <ItemDetailsSection />
            <PhotosSection />
            <DescriptionSection />
            <DealingMethodsSection />
            <Button
              options={{
                type: "black-filled",
                text: "Submit",
                className: CreateListingCSS["submit-btn"],
              }}
              disabled={submitting}
            />
          </form>
        </PageContainer>
      </FullscreenDropzone>
    </FormProvider>
  );
}

export default CreateListing;
