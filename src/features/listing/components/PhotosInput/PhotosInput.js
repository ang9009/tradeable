import * as Form from "@radix-ui/react-form";
import { Controller } from "react-hook-form";
import { Dropzone } from "./../Dropzone/Dropzone";

function PhotosInput({ formData: { errors, control, watch, register } }) {
  // TODO: refer to straker

  return (
    <>
      <Form.Field className={"input-field-container"}>
        <Controller
          control={control}
          name={"photos"}
          render={({ field }) => <Dropzone field={field} />}
        />
      </Form.Field>
    </>
  );
}

export default PhotosInput;
