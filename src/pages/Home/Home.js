import Hero from "../../layouts/Hero/Hero";
import HomeCSS from "./Home.module.css";

function Home() {
  return (
    <>
      <Hero />
      <div className={HomeCSS["about-section"]}>
        <h1 className={HomeCSS["about-section-title"]}>
          Give second-hand items a new life
        </h1>
        <p className={HomeCSS["about-section-text"]}>
          We built a platform to encourage the exchange of preloved items
          between members of CIS! Donate, buy, and sell uniforms, textbooks,
          electronics, and more.
        </p>
      </div>
    </>
  );
}

export default Home;
