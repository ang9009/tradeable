import HeroCSS from "./Hero.module.css";
import HeroNavbar from "./components/HeroNavbar/HeroNavbar";
import HeroSearchbar from "./components/HeroSearchbar/HeroSearchbar";

function Hero() {
  return (
    <div className={HeroCSS["hero-container"]}>
      <HeroNavbar />
      <div className={HeroCSS["title-searchbar-container"]}>
        <h1 className={HeroCSS["hero-title"]}>
          Donate, buy, or sell pre-owned items within CIS
        </h1>
        <HeroSearchbar />
      </div>
      <div className={HeroCSS["hero-bg"]}></div>
    </div>
  );
}

export default Hero;
