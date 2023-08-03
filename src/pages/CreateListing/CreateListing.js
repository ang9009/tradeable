import * as Form from "@radix-ui/react-form";
import { FormProvider, useForm } from "react-hook-form";
import Button from "../../components/ui/Button/Button";
import { ItemDetailsSection, PhotosSection } from "../../features/listing";
import PageContainer from "../../layouts/PageContainer/PageContainer";
import CreateListingCSS from "./CreateListing.module.css";

function CreateListing() {
  const methods = useForm();

  // TODO: move to firebase.js later (facade pattern)
  function onSubmitListing(data) {
    console.log(data);
  }

  return (
    <PageContainer type={"centered"}>
      <FormProvider {...methods}>
        <Form.Root
          onSubmit={methods.handleSubmit((data) => onSubmitListing(data))}
        >
          <h1 className="page-title">Create a new listing</h1>
          <ItemDetailsSection />
          <PhotosSection />
          <Form.Submit asChild>
            <Button
              options={{
                type: "black-filled",
                text: "Submit",
                className: CreateListingCSS["submit-btn"],
              }}
            />
          </Form.Submit>
        </Form.Root>
      </FormProvider>
    </PageContainer>
  );
}

export default CreateListing;
