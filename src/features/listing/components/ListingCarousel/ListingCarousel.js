import ListingCarouselCSS from "./ListingCarousel.module.css";
import "./ThumbsCarousel.css";

function ListingCarousel({ images, imagesNum, className, status }) {
  return (
    <div className={className}>
      {/* Swiper.js images cannot be updated once carousel is rendered, so the number of images is checked*/}
      {images.length === imagesNum && (
        <>
          <div className={ListingCarouselCSS["carousel-container"]}>
            {status !== "available" && (
              <div className={ListingCarouselCSS["overlay"]}>
                <div
                  className={ListingCarouselCSS["status-tag"]}
                  style={{
                    background:
                      status === "reserved" ? "var(--reserved-blue)" : "#fff",
                    color: status === "reserved" ? "#fff" : "#000",
                  }}
                >
                  {status}
                </div>
              </div>
            )}
            <swiper-container
              class={ListingCarouselCSS.carousel}
              thumbs-swiper=".thumbnail-carousel"
              navigation="true"
            >
              {images.map((url) => (
                <swiper-slide key={url}>
                  <img src={url} alt="" class={ListingCarouselCSS.img} />
                </swiper-slide>
              ))}
            </swiper-container>
          </div>
          <swiper-container
            class="thumbnail-carousel"
            space-between="10"
            slides-per-view="4"
            navigation="true"
          >
            {images.map((url) => (
              <swiper-slide key={url}>
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
