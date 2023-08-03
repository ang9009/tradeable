import * as Form from "@radix-ui/react-form";
import { useFormContext } from "react-hook-form";
import Error from "../../../../components/ui/Error/Error";
import PhotosDropzone from "../PhotosDropzone/PhotosDropzone";
import PhotosSectionCSS from "./PhotosSection.module.css";

function PhotosSection() {
  const {
    formState: { errors },
    control,
    watch,
  } = useFormContext();

  return (
    <div className="page-section-container">
      <div className="subtitle">Photos</div>
      <div className="form-section-container">
        <Form.Field className={`input-field-container`}>
          <Error
            message={errors.photos?.message}
            show={errors.photos}
            className={PhotosSectionCSS["photo-error-msg"]}
          />
          <PhotosDropzone />
        </Form.Field>
      </div>
    </div>
  );
}

export default PhotosSection;
