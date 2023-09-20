import { getDownloadURL, uploadBytes } from "firebase/storage";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
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
import {
  db,
  doc,
  getDoc,
  onSubmitListing,
  ref,
  storage,
} from "../../lib/firebase";
import EditListingCSS from "./EditListing.module.css";

// TODO: holy shit this file is insane
function EditListing() {
  const { listingId } = useParams();
  const { user } = useUser();
  const navigate = useNavigate();
  const checkKeyDown = (e) => {
    if (e.key === "Enter") e.preventDefault();
  };
  const [submitting, setIsSubmitting] = useState(false);
  const [isFetchingListing, setIsFetchingListing] = useState(true);
  const methods = useForm({
    mode: "onChange",
  });

  useEffect(() => {
    const listingRef = doc(db, "listings", listingId);
    getDoc(listingRef).then((res) => {
      const listingData = res.data();
      const imagePromises = [];

      for (let i = 0; i < listingData.imagesNum; i++) {
        const pathRef = ref(storage, `listingImages/${listingId}/${i + 1}`);
        imagePromises.push(getDownloadURL(pathRef));
      }

      Promise.all(imagePromises).then((photos) => {
        console.log(photos);

        methods.reset({
          ...listingData,
          condition: {
            value: listingData.condition,
            label: listingData.condition,
          },
          category: {
            value: listingData.category,
            label: listingData.category,
          },
          meetUpLocations: listingData.meetUpLocations.map((location) => {
            return { value: location, label: location };
          }),
          photos: photos.map((url) => {
            return { url: url };
          }),
        });

        setIsFetchingListing(false);
      });
    });
  }, []);

  return (
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
                />
              </div>
            </form>
          </PageContainer>
        </FullscreenDropzone>
      )}
    </FormProvider>
  );
}

{
}

export default EditListing;
