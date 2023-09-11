import ListingCarouselCSS from "./ListingCarousel.module.css";

function ListingCarousel() {
  return (
    <div class={ListingCarouselCSS["carousel-container"]}>
      <swiper-container
        navigation="true"
        class={ListingCarouselCSS.carousel}
        thumbs-swiper=".thumbnail-carousel"
      >
        <swiper-slide>
          <img
            src={require("../../../../assets/authmodal_img.jpeg")}
            alt=""
            class={ListingCarouselCSS["carousel-img"]}
          />
        </swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
      </swiper-container>
      <swiper-container
        class={ListingCarouselCSS["thumbnail-carousel"]}
        space-between="10"
        navigation="false"
        slides-per-view="4"
        free-mode="true"
        watch-slides-progress="true"
      >
        {" "}
        <swiper-slide>
          <img
            src={require("../../../../assets/authmodal_img.jpeg")}
            alt=""
            class={ListingCarouselCSS["thumb-img"]}
          />
        </swiper-slide>{" "}
        <swiper-slide>
          <img
            src={require("../../../../assets/authmodal_img.jpeg")}
            alt=""
            class={ListingCarouselCSS["thumb-img"]}
          />
        </swiper-slide>
        <swiper-slide>
          <img
            src={require("../../../../assets/authmodal_img.jpeg")}
            alt=""
            class={ListingCarouselCSS["thumb-img"]}
          />
        </swiper-slide>{" "}
        <swiper-slide>
          <img
            src={require("../../../../assets/authmodal_img.jpeg")}
            alt=""
            class={ListingCarouselCSS["thumb-img"]}
          />
        </swiper-slide>
        {Array.from({ length: 4 }, () => (
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
