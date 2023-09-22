import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import categoriesData from "../../features/createlisting/data/categoriesData";
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
      <div className={HomeCSS["categories-section"]}>
        <h1 className={HomeCSS["section-title"]}>Categories</h1>
        <div className={HomeCSS["categories-container"]}>
          {categoriesData.map((category) => (
            <div className={HomeCSS["category-card"]}>
              <img
                src={require(`../../assets/categories/${category.imgUrl}`)}
                alt="Image not found"
              />
              <div className={HomeCSS["category-title"]}>
                <h1>{category.title}</h1>
                <FiArrowUpRight
                  size={"21px"}
                  className={HomeCSS["category-arrow"]}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
