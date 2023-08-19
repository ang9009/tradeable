import { FiCamera } from "react-icons/fi";
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
        >
          {value.map(({ _, url }, i) => (
            <DraggablePhoto
              key={i}
              displayValues={{ url, i }}
              inputData={{ onChange, value }}
            />
          ))}
          {Array.from({ length: 6 - value.length }, () => {
            return (
              <div className={PhotosGridCSS["photo-frame"]}>
                <FiCamera size={"25px"} />
              </div>
            );
          })}
        </ReactSortable>
      )}
      {value.length === 0 && (
        <div className={PhotosGridCSS["photos-grid"]}>
          {Array.from({ length: 6 }, () => {
            return (
              <div className={PhotosGridCSS["photo-frame"]}>
                <FiCamera size={"25px"} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default PhotosGrid;
