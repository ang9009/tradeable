import { useDropzone } from "react-dropzone";
import { FiCamera } from "react-icons/fi";
import { handleOnDrop } from "../../utils/handleOnDrop";
import PhotosGrid from "../PhotosGrid/PhotosGrid";
import PhotosDropzoneCSS from "./PhotosDropzone.module.css";

export function PhotosDropzone({ onChange, value }) {
  const { getRootProps, getInputProps } = useDropzone({
    noDrag: true,
    onDrop: (files) => handleOnDrop(files, onChange, value),
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
            <p>
              Drag and drop up to 6 photos into your browser window, or click to
              select
            </p>
          </div>
        </div>
      </div>
      <PhotosGrid onChange={onChange} value={value} />
    </>
  );
}
