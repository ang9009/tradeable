import { FiTrash } from "react-icons/fi";
import DraggablePhotoCSS from "./DraggablePhoto.module.css";

function DraggablePhoto({
  displayValues: { i, url },
  inputData: { onChange, value },
}) {
  return (
    <div className={DraggablePhotoCSS["grid-image-container"]}>
      {i === 0 && (
        <span className={DraggablePhotoCSS["cover-indicator"]}>COVER</span>
      )}
      <span className={DraggablePhotoCSS["image-number"]}>{i + 1}</span>
      <span
        className={DraggablePhotoCSS["delete-btn"]}
        onClick={() => onChange(value.filter((photo) => photo.url != url))}
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
