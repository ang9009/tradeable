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
        name={"photos"}
        rules={{
          required: "Please add at least one image",
          validate: {
            maxFiles: (value) =>
              value.length <= 6 || "Maximum number of photos is 6",
          },
        }}
        render={({ field: { onChange, value } }) => (
          <Dropzone
            noClick
            onDrop={(files) => {
              handleOnDrop(files, onChange, value);
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
