import { useState } from "react";
import Dropzone from "react-dropzone";
import { Controller, useFormContext } from "react-hook-form";
import { FiFile } from "react-icons/fi";
import { handleOnDrop } from "../../utils/handleOnDrop";
import FullscreenDropzoneCSS from "./FullscreenDropzone.module.css";

function FullscreenDropzone({ children }) {
  const { control } = useFormContext();
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <>
      {showOverlay && (
        <div className={FullscreenDropzoneCSS["dropzone-overlay"]}>
          <FiFile color={"#fff"} size={"100px"} />
        </div>
      )}
      <Controller
        control={control}
        rules={{
          required: "Please include at least one image",
        }}
        name={"photos"}
        render={({ field: { onChange } }) => (
          <Dropzone
            noClick
            onDrop={(files) => {
              handleOnDrop(files, onChange);
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
        )}
      />
    </>
  );
}

export default FullscreenDropzone;
