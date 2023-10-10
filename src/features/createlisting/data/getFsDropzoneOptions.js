import { toast } from "react-toastify";
import { handleOnDrop } from "../utils/handleOnDrop";

function getFsDropzoneOptions({ setShowOverlay, getValues, setValue }) {
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
          ? "Please upload files that are under 4MB"
          : "Only .jpg and .png files are supported";
      toast.error(msg, { theme: "colored", position: "bottom-right" });
    },
    accept: {
      "image/png": [],
      "image/jpeg": [],
    },
    maxSize: 4000000,
  };
}

export default getFsDropzoneOptions;
