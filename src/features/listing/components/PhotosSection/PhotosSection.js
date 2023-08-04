import { useFormContext } from "react-hook-form";
import Error from "../../../../components/ui/Error/Error";
import PhotosInput from "../PhotosInput/PhotosInput";
import PhotosSectionCSS from "./PhotosSection.module.css";

function PhotosSection() {
  const {
    formState: { errors },
  } = useFormContext();

  return (
    <div className="page-section-container">
      <div className="subtitle">Photos</div>
      <div className="form-section-container">
        <div className={`input-field-container`}>
          <Error
            message={errors.photos?.message}
            show={errors.photos}
            className={PhotosSectionCSS["photo-error-msg"]}
          />
          <PhotosInput />
        </div>
      </div>
    </div>
  );
}

export default PhotosSection;
