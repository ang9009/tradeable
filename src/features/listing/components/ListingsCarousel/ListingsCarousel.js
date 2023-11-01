import { ListingCard } from "../../../search";
import ListingsCarouselCSS from "./ListingsCarousel.module.css";

function ListingsCarousel({ listings }) {
  return (
    <div className={ListingsCarouselCSS["carousel-container"]}>
      <swiper-container
        class={ListingsCarouselCSS.carousel}
        navigation="true"
        slides-per-view="4"
        space-between="15"
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
