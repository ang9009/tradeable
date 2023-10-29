import { useFormContext } from "react-hook-form";
import InputMessage from "../../../../components/form/InputMessage/InputMessage";
import Error from "../../../../components/ui/Error/Error";
import PhotosInput from "../PhotosInput/PhotosInput";
import PhotosSectionCSS from "./PhotosSection.module.css";

function PhotosSection() {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="page-section-container">
      <div className="subtitle">Photos</div>
      <div className="form-section-container">
        <div className={"input-field-container"}>
          <label
            className={`input-label ${PhotosSectionCSS["dropzone-label"]}`}
          >
            Dropzone
          </label>
          <InputMessage
            message={"Drag and drop to rearrange, hover to delete"}
            className={PhotosSectionCSS["photo-input-msg"]}
          />
          <Error
            show={errors?.photos}
            message={errors?.photos?.message}
            className={PhotosSectionCSS["photo-error-msg"]}
            alertIconClassName={PhotosSectionCSS["alert-icon"]}
          />
          <PhotosInput control={control} errors={errors} />
        </div>
      </div>
    </div>
  );
}

export default PhotosSection;
