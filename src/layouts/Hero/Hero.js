import { useUser } from "../../context/UserContext";
import HeroCSS from "./Hero.module.css";
import HeroNavbar from "./components/HeroNavbar/HeroNavbar";
function Hero() {
  const { user } = useUser();

  return (
    <div className={HeroCSS["hero-container"]}>
      <HeroNavbar />
      <div className={HeroCSS["hero-text"]}>
        <div className={HeroCSS["title-container"]}>
          <span className={HeroCSS["title"]}>
            Trade your second-hand items with other students
          </span>
        </div>
        <p className={HeroCSS["desc"]}>
          Take part in our sustainable initiative: sell preloved items to other
          students in London, or save money by buying them.
        </p>
        <button className={HeroCSS["fat-btn"]}>Start exploring</button>
      </div>
      <div className={HeroCSS["hero-bg"]}></div>
    </div>
  );
}

export default Hero;
