import { useDropzone } from "react-dropzone";
import { FiCamera } from "react-icons/fi";
import { handleOnDrop } from "../../utils/handleOnDrop";
import PhotosDropzoneCSS from "./PhotosDropzone.module.css";

export function PhotosDropzone({ onChange }) {
  const { getRootProps, getInputProps } = useDropzone({
    noDrag: true,
    onDrop: (files) => handleOnDrop(files, onChange),
    maxFiles: 6,
  });

  return (
    <>
      <div
        {...getRootProps({
          className: PhotosDropzoneCSS["dropzone"],
        })}
      >
        <input {...getInputProps()} />
        <div>
          <div className={PhotosDropzoneCSS["dropzone-content"]}>
            <FiCamera size={"25px"} />
            <p>Drop up to 6 photos here, or click to select</p>
          </div>
        </div>
      </div>
    </>
  );
}
