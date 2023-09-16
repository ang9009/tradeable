import ListingCarouselCSS from "./ListingCarousel.module.css";
import "./ThumbsCarousel.css";

function ListingCarousel() {
  return (
    <div class={ListingCarouselCSS["carousel-container"]}>
      <swiper-container
        class={ListingCarouselCSS.carousel}
        thumbs-swiper=".thumbnail-carousel"
        navigation="true"
      >
        {Array.from({ length: 10 }, () => (
          <swiper-slide>
            <img
              src={require("../../../../assets/authmodal_img.jpeg")}
              alt=""
              class={ListingCarouselCSS["thumb-img"]}
            />
          </swiper-slide>
        ))}
      </swiper-container>
      <swiper-container
        class="thumbnail-carousel"
        space-between="10"
        slides-per-view="4"
        navigation="true"
      >
        {Array.from({ length: 10 }, () => (
          <swiper-slide>
            <img
              src={require("../../../../assets/authmodal_img.jpeg")}
              alt=""
              class={ListingCarouselCSS["thumb-img"]}
            />
          </swiper-slide>
        ))}
      </swiper-container>
    </div>
  );
}

export default ListingCarousel;
