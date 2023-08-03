import { FiCamera } from "react-icons/fi";
import { ReactSortable } from "react-sortablejs";
import PhotosGridCSS from "./PhotosGrid.module.css";

function PhotosGrid({ onChange, value }) {
  const photoNums = [1, 2, 3, 4, 5, 6];

  return (
    <div className={PhotosGridCSS["photos-grid-container"]}>
      <ReactSortable
        setList={onChange}
        list={value}
        className={`${PhotosGridCSS["grid-layout"]}`}
        animation={200}
      >
        <>
          {value && (
            <>
              {value.map(({ _, url }, i) => (
                <div className={PhotosGridCSS["grid-image-container"]}>
                  {i === 0 && (
                    <span className={PhotosGridCSS["cover-indicator"]}>
                      COVER
                    </span>
                  )}
                  <span className={PhotosGridCSS["grid-image-number"]}>
                    {i + 1}
                  </span>
                  <div
                    className={PhotosGridCSS["grid-image"]}
                    key={url}
                    style={{
                      backgroundImage: `url(${url})`,
                    }}
                  ></div>
                </div>
              ))}
            </>
          )}
        </>
      </ReactSortable>
      {value && (
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
