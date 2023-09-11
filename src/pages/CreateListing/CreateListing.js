import { FormProvider, useForm } from "react-hook-form";
import Button from "../../components/ui/Button/Button";
import {
  ItemDetailsSection,
  PhotosSection,
} from "../../features/createlisting";
import DealingMethodsSection from "../../features/createlisting/components/DealingMethodsSection/DealingMethodsSection";
import DescriptionSection from "../../features/createlisting/components/DescriptionSection/DescriptionSection";
import FullscreenDropzone from "../../features/createlisting/components/FullscreenDropzone/FullscreenDropzone";
import PageContainer from "../../layouts/PageContainer/PageContainer";
import { onSubmitListing } from "../../lib/firebase";
import CreateListingCSS from "./CreateListing.module.css";

function CreateListing() {
  const methods = useForm({ mode: "onChange" });
  const checkKeyDown = (e) => {
    if (e.key === "Enter") e.preventDefault();
  };

  return (
    <FormProvider {...methods}>
      <FullscreenDropzone>
        <PageContainer type={"centered"}>
          <form
            onSubmit={methods.handleSubmit(onSubmitListing)}
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
