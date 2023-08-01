import { useDropzone } from "react-dropzone";

function PhotosInput() {
  // TODO: refer to straker
  const { getRootProps, getInputProps } = useDropzone({
    accept: { "image/*": [] },
  });

  return (
    <>
      <div className="container">
        <div {...getRootProps({ style })}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here, or click to select files</p>
        </div>
      </div>
    </>
  );
}

export default PhotosInput;
