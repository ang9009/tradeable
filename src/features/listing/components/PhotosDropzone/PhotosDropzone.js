import Dropzone from "react-dropzone";
import { Controller, useFormContext } from "react-hook-form";
import DropzoneContent from "./../DropzoneContent/DropzoneContent";
import PhotosGrid from "./../PhotosGrid/PhotosGrid";
import PhotosDropzoneCSS from "./PhotosDropzone.module.css";

function PhotosDropzone() {
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
          <div className={PhotosDropzoneCSS["photos-field-container"]}>
            <Dropzone
              onDrop={(acceptedFiles) => handleDrop(acceptedFiles, onChange)}
              maxFiles={6}
            >
              {({ getRootProps, getInputProps }) => (
                <DropzoneContent
                  getRootProps={getRootProps}
                  getInputProps={getInputProps}
                />
              )}
            </Dropzone>
            <PhotosGrid onChange={onChange} value={value} />
          </div>
        )}
      />
    </>
  );
}

export default PhotosDropzone;
