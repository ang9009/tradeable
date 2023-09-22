import { FiArrowRight } from "react-icons/fi";
import Footer from "../../layouts/Footer/Footer";
import Hero from "../../layouts/Hero/Hero";
import HomeCSS from "./Home.module.css";

function Home() {
  return (
    <>
      <Hero />
      <div className={HomeCSS["about-section"]}>
        <h1
          className={`${HomeCSS["section-title"]} ${HomeCSS["about-section-title"]}`}
        >
          Give second-hand items a new life
        </h1>
        <p className={HomeCSS["about-section-text"]}>
          We built a platform to facilitate the exchange of preloved items
          between students studying in London! Earn some extra cash by selling
          unneeded items, or save money by buying items at a marked down price.
        </p>
        <button className={HomeCSS["arrow-btn"]}>
          Start exploring
          <FiArrowRight size="17px" className={HomeCSS["arrow"]} />
        </button>
      </div>
      <Footer />
    </>
  );
}

export default Home;
