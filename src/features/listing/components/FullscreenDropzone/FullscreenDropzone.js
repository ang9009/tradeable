import { useState } from "react";
import Dropzone from "react-dropzone";
import { useFormContext } from "react-hook-form";
import { FiFilePlus } from "react-icons/fi";
import { useSetToast } from "../../../../context/ToastContext";
import getFsDropzoneOptions from "../../data/getFsDropzoneOptions";
import FullscreenDropzoneCSS from "./FullscreenDropzone.module.css";

function FullscreenDropzone({ children }) {
  const { setValue, getValues } = useFormContext();
  const [showOverlay, setShowOverlay] = useState(false);
  const setToast = useSetToast();

  const optionsFns = {
    setShowOverlay,
    getValues,
    setValue,
    setToast,
  };

  return (
    <>
      {showOverlay && (
        <div className={FullscreenDropzoneCSS["dropzone-overlay"]}>
          <FiFilePlus color={"#fff"} size={"100px"} />
        </div>
      )}
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
