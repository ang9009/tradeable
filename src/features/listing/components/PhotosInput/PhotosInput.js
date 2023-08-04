import { Controller, useFormContext } from "react-hook-form";
import PhotosGrid from "../PhotosGrid/PhotosGrid";
import { PhotosDropzone } from "./../PhotosDropzone/PhotosDropzone";
import PhotosInputCSS from "./PhotosInput.module.css";

function PhotosInput() {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name={"photos"}
        defaultValue={""}
        render={({ field: { onChange, value } }) => (
          <div className={PhotosInputCSS["photos-field-container"]}>
            <PhotosDropzone onChange={onChange} value={value} />
            <PhotosGrid onChange={onChange} value={value} />
          </div>
        )}
      />
    </>
  );
}

export default PhotosInput;
