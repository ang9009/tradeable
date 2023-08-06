import { useState } from "react";
import Dropzone from "react-dropzone";
import { useFormContext } from "react-hook-form";
import { FiFilePlus } from "react-icons/fi";
import ErrorToast from "../../../../components/ui/ErrorToast/ErrorToast";
import getFsDropzoneOptions from "../../data/getFsDropzoneOptions";
import FullscreenDropzoneCSS from "./FullscreenDropzone.module.css";

function FullscreenDropzone({ children }) {
  const { setValue, getValues } = useFormContext();
  const [showOverlay, setShowOverlay] = useState(false);
  const [openToast, setOpenToast] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  function setToast(state, errMsg) {
    setOpenToast(state);
    setErrMsg(errMsg);
  }

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
      <ErrorToast
        setState={{ open: openToast, setOpen: setOpenToast }}
        options={{
          duration: 4000,
          message: errMsg,
        }}
      />
    </>
  );
}

export default FullscreenDropzone;
