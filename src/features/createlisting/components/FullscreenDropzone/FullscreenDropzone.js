import { useState } from "react";
import Dropzone from "react-dropzone";
import { useFormContext } from "react-hook-form";
import { FiFilePlus } from "react-icons/fi";
import getFsDropzoneOptions from "../../data/getFsDropzoneOptions";
import FullscreenDropzoneCSS from "./FullscreenDropzone.module.css";

function FullscreenDropzone({ children }) {
  const { setValue, getValues } = useFormContext();
  const [showOverlay, setShowOverlay] = useState(false);

  const optionsFns = {
    setShowOverlay,
    getValues,
    setValue,
  };

  return (
    <>
      {showOverlay && (
        <div className={FullscreenDropzoneCSS["dropzone-overlay"]}>
          <FiFilePlus color={"#fff"} size={"100px"} />
        </div>
      )}
      {/* Go to getFsDropzoneOptions for error messages */}
      <Dropzone {...getFsDropzoneOptions(optionsFns)}>
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
