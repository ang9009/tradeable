import { ReactSortable } from "react-sortablejs";
import DraggablePhoto from "../DraggablePhoto/DraggablePhoto";
import PhotosGridCSS from "./PhotosGrid.module.css";

function PhotosGrid({ onChange, value }) {
  return (
    <div>
      {value && value.length !== 0 && (
        <ReactSortable
          setList={onChange}
          list={value}
          animation={200}
          className={PhotosGridCSS["photos-grid"]}
          swap
        >
          {value.map(({ _, url }, i) => (
            <DraggablePhoto
              key={i}
              displayValues={{ url, i }}
              inputData={{ onChange, value }}
            />
          ))}
          {Array.from({ length: 6 - value.length }, (i) => {
            return <div className={PhotosGridCSS["photo-frame"]} key={i}></div>;
          })}
        </ReactSortable>
      )}
      {value.length === 0 && (
        <div className={PhotosGridCSS["photos-grid"]}>
          {Array.from({ length: 6 }, (i) => {
            return <div className={PhotosGridCSS["photo-frame"]} key={i}></div>;
          })}
        </div>
      )}
    </div>
  );
}

export default PhotosGrid;
