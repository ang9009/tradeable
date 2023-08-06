import { FiCamera } from "react-icons/fi";
import { ReactSortable } from "react-sortablejs";
import DraggablePhoto from "../DraggablePhoto/DraggablePhoto";
import PhotosGridCSS from "./PhotosGrid.module.css";

function PhotosGrid({ onChange, value }) {
  return (
    <div className={PhotosGridCSS["photos-grid-container"]}>
      {value && value.length !== 0 && (
        <ReactSortable
          setList={onChange}
          list={value}
          className={`${PhotosGridCSS["photos-grid"]}`}
          animation={200}
        >
          {value.map(({ _, url }, i) => (
            <DraggablePhoto
              key={i}
              displayValues={{ url, i }}
              inputData={{ onChange, value }}
            />
          ))}
        </ReactSortable>
      )}
      <div className={`${PhotosGridCSS["frames-container"]}`}>
        {Array.from(
          { length: 6 + (value?.length > 6 && value?.length - 6) },
          (_, i) => (
            <div key={i} className={PhotosGridCSS["photo-frame"]}>
              <FiCamera size={"25px"} />
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default PhotosGrid;
