import { Controller } from "react-hook-form";
import photosInputRules from "../../data/photosInputRules";
import PhotosDropzone from "../PhotosDropzone/PhotosDropzone";
import PhotosInputCSS from "./PhotosInput.module.css";

function PhotosInput({ control, errors }) {
  return (
    <>
      <Controller
        control={control}
        name={"photos"}
        rules={photosInputRules}
        defaultValue={[]}
        render={({ field: { onChange, value, ref } }) => (
          <div className={PhotosInputCSS["photos-field-container"]}>
            <PhotosDropzone
              props={{ onChange, value, isError: errors?.photos }}
              ref={ref}
            />
          </div>
        )}
      />
    </>
  );
}

export default PhotosInput;
