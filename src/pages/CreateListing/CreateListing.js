import TextInput from "../../components/form/TextInput/TextInput";
import PageContainer from "../../layouts/PageContainer/PageContainer";
import * as Form from "@radix-ui/react-form";
import CreateListingCSS from "./CreateListing.module.css";
import SelectInput from "../../components/form/SelectInput/SelectInput";
import Button from "../../components/ui/Button/Button";
import { useForm } from "react-hook-form";
import { useState } from "react";

function CreateListing() {
  const { register, control, handleSubmit } = useForm();

  return (
    <PageContainer type={"centered"}>
      <h1 className="page-title">Create a new listing</h1>
      <div className="page-section-container">
        <div className="subtitle">Item details</div>
      </div>
      <Form.Root
        className={`form-section-container ${CreateListingCSS["item-details-container"]}`}
        onSubmit={handleSubmit((data) => console.log(data))}
      >
        <TextInput
          register={register}
          label={"Name"}
          placeholder={"Enter item name"}
        />
        <SelectInput
          label={"Condition"}
          placeholder={"Select condition"}
          register={register}
        />
        <Form.Submit asChild>
          <Button type={"black-filled"} text={"Submit"} />
        </Form.Submit>
      </Form.Root>
    </PageContainer>
  );
}

export default CreateListing;
