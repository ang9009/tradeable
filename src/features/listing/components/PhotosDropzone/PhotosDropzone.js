import Dropzone from "react-dropzone";
import { FiCamera } from "react-icons/fi";
import PhotosDropzoneCSS from "./PhotosDropzone.module.css";

export function PhotosDropzone({ handleDrop, onChange }) {
  return (
    <Dropzone
      onDrop={(acceptedFiles) => handleDrop(acceptedFiles, onChange)}
      maxFiles={6}
    >
      {({ getRootProps, getInputProps }) => (
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <div className={PhotosDropzoneCSS["dropzone"]}>
            <div className={PhotosDropzoneCSS["dropzone-content"]}>
              <FiCamera size={"25px"} />
              <p>Drop up to 6 photos here, or click to select</p>
            </div>
          </div>
        </div>
      )}
    </Dropzone>
  );
}
