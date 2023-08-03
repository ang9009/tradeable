import Dropzone from "react-dropzone";
import { Controller, useFormContext } from "react-hook-form";
import Error from "../../../../components/ui/Error/Error";
import PhotosDropzoneCSS from "./PhotosDropzone.module.css";

function PhotosDropzone() {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <Error
        message={errors.photos?.message}
        show={errors.photos}
        className={PhotosDropzoneCSS["photo-error-msg"]}
      />
      <Controller
        control={control}
        rules={{
          required: "Please include at least one image",
        }}
        name={"photos"}
        defaultValue={""}
        render={({ field: { onChange } }) => (
          <Dropzone onDrop={(acceptedFiles) => onChange(acceptedFiles)}>
            {({ getRootProps, getInputProps }) => (
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
              </div>
            )}
          </Dropzone>
        )}
      />
    </>
  );
}

export default PhotosDropzone;
