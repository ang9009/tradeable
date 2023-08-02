import { PhotosSection, ItemDetailsSection } from "../../features/listing";
import * as Form from "@radix-ui/react-form";
import { useForm } from "react-hook-form";
import Button from "../../components/ui/Button/Button";
import PageContainer from "../../layouts/PageContainer/PageContainer";
import CreateListingCSS from "./CreateListing.module.css";

function CreateListing() {
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // TODO: move to firebase.js later (facade pattern)
  function onSubmitListing(data) {
    console.log(JSON.stringify(data));
  }

  return (
    <PageContainer type={"centered"}>
      <Form.Root onSubmit={handleSubmit((data) => onSubmitListing(data))}>
        <h1 className="page-title">Create a new listing</h1>
        <ItemDetailsSection formData={{ register, control, errors, watch }} />
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
    </PageContainer>
  );
}

export default CreateListing;
