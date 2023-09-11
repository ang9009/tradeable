import { Controller } from "react-hook-form";
import photosInputRules from "../../data/photosInputRules";
import PhotosDropzone from "../PhotosDropzone/PhotosDropzone";

function PhotosInput({ control, errors }) {
  return (
    <>
      <Controller
        control={control}
        name={"photos"}
        rules={photosInputRules}
        defaultValue={[]}
        render={({ field: { onChange, value, ref } }) => (
          <PhotosDropzone
            props={{ onChange, value, isError: errors?.photos }}
            ref={ref}
          />
        )}
      />
    </>
  );
}

export default PhotosInput;
