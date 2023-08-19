import { ReactSortable } from "react-sortablejs";
import DraggablePhoto from "../DraggablePhoto/DraggablePhoto";
import PhotosGridCSS from "./PhotosGrid.module.css";

function PhotosGrid({ onChange, value }) {
  return (
    <div className={PhotosGridCSS["component-container"]}>
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
    </div>
  );
}

export default PhotosGrid;
