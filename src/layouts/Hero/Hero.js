import hero from "../../assets/hero.jpg";
import Button from "../../components/ui/Button/Button";
import { useUser } from "../../context/UserContext";
import HeroCSS from "./Hero.module.css";

function Hero() {
  const { user } = useUser();

  return (
    <div className={HeroCSS["hero-container"]}>
      <div className={HeroCSS["hero-text"]}>
        <span className={HeroCSS["title"]}>
          Save or make money back on dorm essentials
        </span>
        <p className={HeroCSS["desc"]}>
          Take part in our sustainable initiative! Sell preloved items to other
          students in London, or save money by buying them.
        </p>
        <div className={HeroCSS["btns-container"]}>
          <Button
            options={{
              type: "black-filled",
              text: "How it works",
              className: HeroCSS["how-it-works-btn"],
            }}
          />
          <Button
            options={{
              type: "gray-outline",
              text: "Explore",
              className: HeroCSS["explore-btn"],
            }}
          />
        </div>
        <img src={hero} alt="" />
      </div>
    </div>
  );
}

export default Hero;
