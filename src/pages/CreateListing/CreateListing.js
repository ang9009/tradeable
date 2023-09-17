import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
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
import { onSubmitListing } from "../../lib/firebase";
import getId from "../../utils/getId";
import CreateListingCSS from "./CreateListing.module.css";

function CreateListing() {
  const methods = useForm({ mode: "onChange" });
  const { user } = useUser();
  const navigate = useNavigate();
  const checkKeyDown = (e) => {
    if (e.key === "Enter") e.preventDefault();
  };

  return (
    <FormProvider {...methods}>
      <FullscreenDropzone>
        <PageContainer type={"centered"}>
          <form
            onSubmit={methods.handleSubmit(async (data) => {
              const listingId = getId();
              await onSubmitListing(data, listingId, user.uid);
              navigate(`/listing/${listingId}`);
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
              disabled={methods.formState.isSubmitting}
            />
          </form>
        </PageContainer>
      </FullscreenDropzone>
    </FormProvider>
  );
}

export default CreateListing;
