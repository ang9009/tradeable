import ListingCSS from "./Listing.module.css";

function Listing() {
  return (
    <div className={ListingCSS["page-container"]}>
      <swiper-container navigation="true" class={ListingCSS.carousel}>
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
      </swiper-container>
      <div className={ListingCSS["info-container"]}>
        <h1 className={ListingCSS.title}>
          TGR Jane V2 ME Custom Keyboard (Silver with Suave Blue Backplate)
        </h1>
      </div>
    </div>
  );
}

export default Listing;
