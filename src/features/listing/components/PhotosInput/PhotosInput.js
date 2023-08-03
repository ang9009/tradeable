import * as Form from "@radix-ui/react-form";
import { useFormContext } from "react-hook-form";
import Error from "../../../../components/ui/Error/Error";
import PhotosDropzone from "../PhotosDropzone/PhotosDropzone";

function PhotosInput() {
  const { control } = useFormContext();

  return (
    <>
      <Form.Field className={"input-field-container"}>
        <Error message="hi" />
        <PhotosDropzone control={control} />
      </Form.Field>
    </>
  );
}

export default PhotosInput;
