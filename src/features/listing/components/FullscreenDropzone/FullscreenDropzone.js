import { useState } from "react";
import Dropzone from "react-dropzone";
import { useFormContext } from "react-hook-form";
import { FiFile } from "react-icons/fi";
import { handleOnDrop } from "../../utils/handleOnDrop";
import FullscreenDropzoneCSS from "./FullscreenDropzone.module.css";

function FullscreenDropzone({ children }) {
  const { setValue, getValues } = useFormContext();
  const [showOverlay, setShowOverlay] = useState(false);
  function onChange(value) {
    setValue("photos", value, { shouldValidate: true });
  }

  return (
    <>
      {showOverlay && (
        <div className={FullscreenDropzoneCSS["dropzone-overlay"]}>
          <FiFile color={"#fff"} size={"100px"} />
        </div>
      )}
      <Dropzone
        noClick
        onDrop={(files) => {
          handleOnDrop(files, onChange, getValues("photos"));
          setShowOverlay(false);
        }}
        onDragEnter={() => setShowOverlay(true)}
        onDragLeave={() => setShowOverlay(false)}
      >
        {({ getRootProps, getInputProps }) => (
          <section>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              {children}
            </div>
          </section>
        )}
      </Dropzone>
    </>
  );
}

export default FullscreenDropzone;
