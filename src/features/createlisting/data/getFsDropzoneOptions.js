import { handleOnDrop } from "../utils/handleOnDrop";

function getFsDropzoneOptions({
  setShowOverlay,
  getValues,
  setValue,
  setToast,
}) {
  const onChange = (value) => {
    setValue("photos", value, { shouldValidate: true });
  };

  return {
    noClick: true,
    onDrop: () => {
      setShowOverlay(false);
    },
    onDropAccepted: (files) => {
      handleOnDrop(files, onChange, getValues("photos"));
    },
    onDragEnter: () => setShowOverlay(true),
    onDragLeave: () => setShowOverlay(false),
    onDropRejected: (res) => {
      const err = res[0].errors[0].code;
      const msg =
        err === "file-too-large"
          ? "Please upload files that are under 5MB"
          : "Only .jpg and .png files are supported";
      setToast(4000, msg);
    },
    accept: {
      "image/png": [],
      "image/jpeg": [],
    },
    maxSize: 5000000,
  };
}

export default getFsDropzoneOptions;
