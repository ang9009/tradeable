import { FormProvider, useForm } from "react-hook-form";
import Button from "../../components/ui/Button/Button";
import { ItemDetailsSection, PhotosSection } from "../../features/listing";
import DealingMethodsSection from "../../features/listing/components/DealingMethodsSection/DealingMethodsSection";
import DescriptionSection from "../../features/listing/components/DescriptionSection/DescriptionSection";
import FullscreenDropzone from "../../features/listing/components/FullscreenDropzone/FullscreenDropzone";
import PageContainer from "../../layouts/PageContainer/PageContainer";
import CreateListingCSS from "./CreateListing.module.css";

function CreateListing() {
  const methods = useForm({ mode: "onChange" });

  // TODO: move to firebase.js later (facade pattern)
  function onSubmitListing(data) {
    console.log(data);
  }

  return (
    <FormProvider {...methods}>
      <FullscreenDropzone>
        <PageContainer type={"centered"}>
          <form onSubmit={methods.handleSubmit(onSubmitListing)}>
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
            />
          </form>
        </PageContainer>
      </FullscreenDropzone>
    </FormProvider>
  );
}

export default CreateListing;
