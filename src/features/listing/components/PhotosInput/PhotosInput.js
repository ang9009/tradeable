import { Controller, useFormContext } from "react-hook-form";
import photosInputRules from "../../data/photosInputRules";
import { PhotosDropzone } from "./../PhotosDropzone/PhotosDropzone";
import PhotosInputCSS from "./PhotosInput.module.css";

function PhotosInput() {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  console.log(errors);
  return (
    <>
      <Controller
        control={control}
        name={"photos"}
        rules={photosInputRules}
        defaultValue={[]}
        render={({ field: { onChange, value } }) => (
          <div className={PhotosInputCSS["photos-field-container"]}>
            <PhotosDropzone onChange={onChange} value={value} />
          </div>
        )}
      />
    </>
  );
}

export default PhotosInput;
