import { useFormContext } from "react-hook-form";
import PhotosInput from "../PhotosInput/PhotosInput";

function PhotosSection() {
  const {
    register,
    control,
    watch,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="page-section-container">
      <div className="subtitle">Photos</div>
      <div className="form-section-container">
        <PhotosInput />
      </div>
    </div>
  );
}

export default PhotosSection;
