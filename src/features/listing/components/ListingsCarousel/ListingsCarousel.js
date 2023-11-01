import { useEffect, useRef } from "react";
import { register } from "swiper/element";
import { ListingCard } from "../../../search";
import ListingsCarouselCSS from "./ListingsCarousel.module.css";

function ListingsCarousel({ listings }) {
  const swiperRef = useRef(null);
  useEffect(() => {
    // Register Swiper web component
    register();

    // Object with parameters
    const params = {
      observer: true,
      breakpoints: {
        // when window width is >= 320px
        // when window width is >= 480px
        300: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        500: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
    };

    // Assign it to swiper element
    Object.assign(swiperRef.current, params);

    // initialize swiper
    swiperRef.current.initialize();
  }, []);

  return (
    <div className={ListingsCarouselCSS["carousel-container"]}>
      <swiper-container
        class={ListingsCarouselCSS.carousel}
        ref={swiperRef}
        navigation="true"
      >
        {listings.map((listing) => {
          return (
            <swiper-slide>
              <ListingCard listing={listing} />
            </swiper-slide>
          );
        })}
      </swiper-container>
    </div>
  );
}

export default ListingsCarousel;
