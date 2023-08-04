import DraggablePhotoCSS from "./DraggablePhoto.module.css";

function DraggablePhoto({ i, url }) {
  return (
    <div className={DraggablePhotoCSS["grid-image-container"]}>
      {i === 0 && (
        <span className={DraggablePhotoCSS["cover-indicator"]}>COVER</span>
      )}
      <span className={DraggablePhotoCSS["grid-image-number"]}>{i + 1}</span>
      <div
        className={DraggablePhotoCSS["grid-image"]}
        key={url}
        style={{
          backgroundImage: `url(${url})`,
        }}
      ></div>
    </div>
  );
}

export default DraggablePhoto;
