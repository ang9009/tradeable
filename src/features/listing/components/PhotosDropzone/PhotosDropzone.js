import { forwardRef, useImperativeHandle } from "react";
import { useDropzone } from "react-dropzone";
import { FiCamera } from "react-icons/fi";
import { handleOnDrop } from "../../utils/handleOnDrop";
import PhotosGrid from "../PhotosGrid/PhotosGrid";
import PhotosDropzoneCSS from "./PhotosDropzone.module.css";

const PhotosDropzone = forwardRef(function (
  { props: { onChange, value, isError } },
  ref
) {
  const { getRootProps, getInputProps, rootRef, isFocused } = useDropzone({
    noDrag: true,
    onDrop: (files) => handleOnDrop(files, onChange, value),
    accept: {
      "image/png": [],
      "image/jpeg": [],
    },
  });
  // Required because react hook form doesn't allow custom refs...
  useImperativeHandle(ref, () => rootRef.current, [rootRef]);

  function borderColor() {
    return isError
      ? "1.5px dashed var(--warning-red)"
      : isFocused && "1.5px dashed var(--input-focus-color)";
  }

  return (
    <div className={PhotosDropzoneCSS["photos-field-container"]}>
      <div
        {...getRootProps({
          className: PhotosDropzoneCSS["dropzone"],
          style: { border: borderColor() },
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
    </div>
  );
});

export default PhotosDropzone;
