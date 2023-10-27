import CopyToClipboard from "react-copy-to-clipboard";
import { FiShare } from "react-icons/fi";
import { toast } from "react-toastify";
import ListingCarouselCSS from "./ListingCarousel.module.css";
import "./ThumbsCarousel.css";

function ListingCarousel({ images, imagesNum, className, status }) {
  return (
    <div className={className}>
      {/* Swiper.js images cannot be updated once carousel is rendered, so the number of images is checked*/}
      {images.length === imagesNum && (
        <>
          <div className={ListingCarouselCSS["carousel-container"]}>
            {status === "available" && (
              <CopyToClipboard text={window.location.href}>
                <button
                  className={ListingCarouselCSS["share-btn"]}
                  onClick={() =>
                    toast.success("Link copied to clipboard", {
                      autoClose: 3000,
                      theme: "colored",
                    })
                  }
                >
                  <FiShare size={"15px"} />
                  <span>Share</span>
                </button>
              </CopyToClipboard>
            )}
            {status !== "available" && (
              <>
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
                <div className={ListingCarouselCSS["overlay"]}></div>
              </>
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
