import ListingCarouselCSS from "./ListingCarousel.module.css";
import "./ThumbsCarousel.css";

function ListingCarousel({ images, imagesNum }) {
  return (
    <div class={ListingCarouselCSS["carousel-container"]}>
      {/* Swiper.js images cannot be updated once carousel is rendered, so the number of images is checked*/}
      {images.length === imagesNum && (
        <>
          <swiper-container
            class={ListingCarouselCSS.carousel}
            thumbs-swiper=".thumbnail-carousel"
            navigation="true"
          >
            {images.map((url) => (
              <swiper-slide>
                <img src={url} alt="" class={ListingCarouselCSS.img} />
              </swiper-slide>
            ))}
          </swiper-container>
          <swiper-container
            class="thumbnail-carousel"
            space-between="10"
            slides-per-view="4"
            navigation="true"
          >
            {images.map((url) => (
              <swiper-slide>
                <img src={url} alt="" class={ListingCarouselCSS.img} />
              </swiper-slide>
            ))}
          </swiper-container>
        </>
      )}
    </div>
  );
}

export default ListingCarousel;
