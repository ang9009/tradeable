import HeroCSS from "./Hero.module.css";
import HeroNavbar from "./components/HeroNavbar/HeroNavbar";
function Hero() {
  return (
    <div className={HeroCSS["hero-container"]}>
      <HeroNavbar />
      <div className={HeroCSS["hero-text"]}>
        <div className={HeroCSS["title-container"]}>
          <span className={HeroCSS["title"]}>
            Donate, buy, or sell your second-hand items
          </span>
        </div>
        <p className={HeroCSS["desc"]}>
          Take part in our sustainable initiative! Offer your second-hand items
          to other members of CIS via tradeable.
        </p>
        <button className={HeroCSS["fat-btn"]}>Sign up and get started</button>
      </div>
      <div className={HeroCSS["hero-bg"]}></div>
    </div>
  );
}

export default Hero;
