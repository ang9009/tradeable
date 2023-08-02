import PhotosInput from "../PhotosInput/PhotosInput";

function PhotosSection({ formData: { control, errors, watch, register } }) {
  return (
    <div className="page-section-container">
      <div className="subtitle">Photos</div>
      <PhotosInput formData={{ errors, control, watch, register }} />
    </div>
  );
}

export default PhotosSection;
