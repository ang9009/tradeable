import ProfileReviewsSectionCSS from "./ProfileReviewsSection.module.css";

function ProfileReviewsSection() {
  return (
    <div className={ProfileReviewsSectionCSS["reviews-section"]}>
      <h1 className={ProfileReviewsSectionCSS.title}>Reviews</h1>
    </div>
  );
}

export default ProfileReviewsSection;
