import { PhotosSection, ItemDetailsSection } from "../../features/listing";
import * as Form from "@radix-ui/react-form";
import { useForm } from "react-hook-form";
import Button from "../../components/ui/Button/Button";
import PageContainer from "../../layouts/PageContainer/PageContainer";
import CreateListingCSS from "./CreateListing.module.css";
import { useEffect } from "react";

function CreateListing() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // TODO: move to firebase.js later (facade pattern)
  function onSubmitListing(data) {
    console.log(JSON.stringify(data));
  }

  return (
    <PageContainer
      type={"centered"}
      onSubmit={handleSubmit((data) => onSubmitListing(data))}
    >
      <Form.Root onSubmit={handleSubmit((data) => console.log(data))}>
        <h1 className="page-title">Create a new listing</h1>
        <ItemDetailsSection
          register={register}
          control={control}
          errors={errors}
        />
        <PhotosSection />
        <Form.Submit asChild>
          <Button
            type={"black-filled"}
            text={"Submit"}
            className={CreateListingCSS["submit-btn"]}
          />
        </Form.Submit>
      </Form.Root>
    </PageContainer>
  );
}

export default CreateListing;
