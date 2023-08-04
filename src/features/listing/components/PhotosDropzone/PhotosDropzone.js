import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FiCamera } from "react-icons/fi";
import PhotosDropzoneCSS from "./PhotosDropzone.module.css";

export function PhotosDropzone({ onChange }) {
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: handleDrop,
    maxFiles: 6,
  });
  const [showFsDropzone, setShowFsDropzone] = useState(false);

  function handleDrop(acceptedFiles) {
    onChange(
      acceptedFiles.map((file) => {
        return { file: file, url: URL.createObjectURL(file) };
      })
    );
  }

  useEffect(() => {
    let lastTarget = null;

    function handleDragEnter(e) {
      lastTarget = e.target;
      e.preventDefault();
      e.stopPropagation();
      setShowFsDropzone(true);
    }

    function handleDragLeave(e) {
      e.stopPropagation();

      if (e.target === lastTarget || e.target === document) {
        setShowFsDropzone(false);
      }
    }

    window.addEventListener("dragenter", handleDragEnter);
    window.addEventListener("dragleave", handleDragLeave);
    window.addEventListener("dragover", (e) => {
      e.stopPropagation();
      e.preventDefault();
    });
    window.addEventListener("drop", (e) => {
      e.stopPropagation();
      console.log("test");
      setShowFsDropzone(false);
    });

    return () => {
      window.removeEventListener("dragenter", handleDragEnter);
      window.removeEventListener("dragleave", handleDragLeave);
      window.removeEventListener("dragover", (e) => {
        e.stopPropagation();
        e.preventDefault();
      });
      window.removeEventListener("drop", (e) => {
        e.stopPropagation();
        setShowFsDropzone(false);
      });
    };
  }, []);

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
      {/* Fullscreen dropzone */}

      <div
        {...getRootProps({
          className: PhotosDropzoneCSS["fs-dropzone"],
          style: { display: showFsDropzone && "initial" },
        })}
      >
        <input {...getInputProps({ onClick: (e) => e.preventDefault() })} />
      </div>
    </>
  );
}
