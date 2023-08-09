import { useFormContext } from "react-hook-form";
import { FiTrash } from "react-icons/fi";
import { RiDragMove2Line } from "react-icons/ri";
import DraggablePhotoCSS from "./DraggablePhoto.module.css";

function DraggablePhoto({ displayValues: { i, url }, inputData: { value } }) {
  const { setValue } = useFormContext();

  function handleDelete() {
    setValue(
      "photos",
      value.filter((photo) => photo.url != url),
      { shouldValidate: true }
    );
  }

  return (
    <div className={DraggablePhotoCSS["grid-image-container"]}>
      {i === 0 && (
        <span className={DraggablePhotoCSS["cover-indicator"]}>COVER</span>
      )}
      <span className={DraggablePhotoCSS["image-number"]}>{i + 1}</span>
      <RiDragMove2Line
        size={"30px"}
        className={DraggablePhotoCSS["drag-indicator"]}
      />
      <span
        className={DraggablePhotoCSS["delete-btn"]}
        onClick={() => handleDelete()}
      >
        <FiTrash />
      </span>
      <div
        className={`${DraggablePhotoCSS["grid-image"]}`}
        key={url}
        style={{
          backgroundImage: `url(${url})`,
        }}
      ></div>
    </div>
  );
}

export default DraggablePhoto;
