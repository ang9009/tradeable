import { useState } from "react";
import Dropzone from "react-dropzone";
import { Controller, useFormContext } from "react-hook-form";
import { FiCamera } from "react-icons/fi";
import { ReactSortable } from "react-sortablejs";
import PhotosDropzoneCSS from "./PhotosDropzone.module.css";

function PhotosDropzone() {
  const { control } = useFormContext();
  const [imgUrls, setImgUrls] = useState([]);

  return (
    <>
      <Controller
        control={control}
        rules={{
          required: "Please include at least one image",
        }}
        name={"photos"}
        defaultValue={""}
        render={({ field: { onChange, value } }) => (
          <div className={PhotosDropzoneCSS["photos-field-container"]}>
            <Dropzone
              onDrop={(acceptedFiles) => {
                onChange(
                  acceptedFiles.map((file) => {
                    return { file: file, url: URL.createObjectURL(file) };
                  })
                );
              }}
              maxFiles={6}
            >
              {({ getRootProps, getInputProps }) => (
                <div className={PhotosDropzoneCSS["dropzone"]}>
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <div className={PhotosDropzoneCSS["dropzone-content"]}>
                      <FiCamera size={"30px"} />
                      <p>
                        Drag and drop or click here to select up to 6 photos
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </Dropzone>
            {/* TODO: move to another component later, reorganize */}
            <ReactSortable
              setList={onChange}
              list={value}
              className={PhotosDropzoneCSS["grid-layout"]}
              animation={200}
            >
              {value &&
                value.map(({ _, url }) => (
                  <div
                    key={url}
                    style={{
                      backgroundImage: `url(${url})`,
                    }}
                  ></div>
                ))}
            </ReactSortable>
          </div>
        )}
      />
    </>
  );
}

export default PhotosDropzone;
