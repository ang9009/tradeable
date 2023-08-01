import * as Form from "@radix-ui/react-form";
import { useForm } from "react-hook-form";
import Button from "../../components/ui/Button/Button";
import ItemDetailsSection from "../../features/listing/components/ItemDetailsSection/ItemDetailsSection";
import PageContainer from "../../layouts/PageContainer/PageContainer";
import CreateListingCSS from "./CreateListing.module.css";

function CreateListing() {
  const { register, control, handleSubmit } = useForm();

  // TODO: move to firebase.js later (facade pattern)
  function submitListing(data) {
    console.log(JSON.stringify(data));
  }

  return (
    <PageContainer
      type={"centered"}
      onSubmit={handleSubmit((data) => submitListing(data))}
    >
      <Form.Root onSubmit={handleSubmit((data) => console.log(data))}>
        <h1 className="page-title">Create a new listing</h1>
        <div className="subtitle">Item details</div>
        <ItemDetailsSection register={register} control={control} />
        <div className="subtitle">Photos</div>
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
