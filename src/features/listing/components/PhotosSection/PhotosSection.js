import { useFormContext } from "react-hook-form";
import Error from "../../../../components/ui/Error/Error";
import PhotosInput from "../PhotosInput/PhotosInput";
import PhotosSectionCSS from "./PhotosSection.module.css";

function PhotosSection() {
  const {
    formState: { errors },
  } = useFormContext();
  console.log(errors);

  return (
    <div className="page-section-container">
      <div className="subtitle">Photos</div>
      <div className="form-section-container">
        <Error
          message={errors.photos?.message}
          show={errors.photos}
          className={PhotosSectionCSS["photo-error-msg"]}
        />
        <div className={"input-field-container"}>
          <label className={"input-label"}>Photo dropzone</label>
          <p className={PhotosSectionCSS["grid-hint"]}>
            Drag and drop to rearrange, hover to delete
          </p>
          <PhotosInput />
        </div>
      </div>
    </div>
  );
}

export default PhotosSection;
