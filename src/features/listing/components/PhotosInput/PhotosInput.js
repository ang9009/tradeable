import { Controller, useFormContext } from "react-hook-form";
import PhotosGrid from "../PhotosGrid/PhotosGrid";
import { PhotosDropzone } from "./../PhotosDropzone/PhotosDropzone";
import PhotosInputCSS from "./PhotosInput.module.css";

function PhotosInput() {
  const { control } = useFormContext();

  function handleDrop(acceptedFiles, onChange) {
    onChange(
      acceptedFiles.map((file) => {
        return { file: file, url: URL.createObjectURL(file) };
      })
    );
  }

  return (
    <>
      <Controller
        control={control}
        rules={{
          required: "Please include at least one image",
        }}
        name={"photos"}
        defaultValue={""}
        render={({ field: { onChange, value } }) => (
          <div className={PhotosInputCSS["photos-field-container"]}>
            <PhotosDropzone handleDrop={handleDrop} onChange={onChange} />
            <PhotosGrid onChange={onChange} value={value} />
          </div>
        )}
      />
    </>
  );
}

export default PhotosInput;
