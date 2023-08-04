import { FiCamera } from "react-icons/fi";
import { ReactSortable } from "react-sortablejs";
import PhotosGridDraggable from "../PhotosGridDraggable/DraggablePhoto";
import PhotosGridCSS from "./PhotosGrid.module.css";

function PhotosGrid({ onChange, value }) {
  const photoNums = [1, 2, 3, 4, 5, 6];
  console.log(value);

  return (
    <div className={PhotosGridCSS["photos-grid-container"]}>
      <ReactSortable
        setList={onChange}
        list={value}
        className={`${PhotosGridCSS["grid-layout"]}`}
        animation={200}
      >
        {value &&
          value.map(({ _, url }, i) => <PhotosGridDraggable i={i} url={url} />)}
      </ReactSortable>
      {value.length !== 0 && (
        <p className={PhotosGridCSS["grid-hint"]}>
          Drag and drop photos to rearrange
        </p>
      )}
      <div
        className={`${PhotosGridCSS["grid-layout"]} ${PhotosGridCSS["photo-frames-container"]}`}
      >
        {photoNums.map((num) => (
          <div key={num} className={PhotosGridCSS["photo-frame"]}>
            <FiCamera size={"25px"} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PhotosGrid;
