import Button from "../../components/ui/Button/Button";
import { ListingCarousel, ListingInfo } from "../../features/listing";
import SellerWidget from "../../features/listing/components/SellerWidget/SellerWidget";
import ListingCSS from "./Listing.module.css";

function Listing() {
  return (
    <div className={ListingCSS["page-container"]}>
      <ListingCarousel />
      <div className={ListingCSS["listing-details"]}>
        <ListingInfo />
        <div className={ListingCSS["divider"]}></div>
        <div className={ListingCSS["seller-section"]}>
          <SellerWidget />
          <Button
            options={{
              text: "Message seller",
              type: "black-filled",
              className: ListingCSS["msg-seller-btn"],
            }}
          />
        </div>
        <div className={ListingCSS["divider"]}></div>
        <div>
          <h1 className={ListingCSS["desc-title"]}>Description</h1>
          <p className={ListingCSS.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            dolore quidem nemo ut omnis inventore velit nulla, laborum expedita
            doloribus illum voluptates dolor quam magnam beatae! Quis, deleniti!
            Mollitia fugit facere, obcaecati voluptatibus laudantium quos
            laborum ut quasi consequatur voluptates animi voluptatum veritatis
            quis minus sit itaque recusandae odio dolorem!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Listing;
