import React from "react";
import { useDropzone } from "react-dropzone";
export function Dropzone({ field }) {
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    accept: { "image/*": [] },
  });

  return (
    <div className="container">
      <div {...getRootProps()}>
        <input {...getInputProps()} {...field} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
    </div>
  );
}
