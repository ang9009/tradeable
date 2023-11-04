import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button/Button";
import HeroCSS from "./Hero.module.css";

function Hero() {
  const navigate = useNavigate();

  return (
    <div className={HeroCSS["hero-container"]}>
      <div className={HeroCSS["hero-text"]}>
        <span className={HeroCSS["title"]}>
          An online marketplace for university students in London
        </span>
        <p className={HeroCSS["desc"]}>
          Make some extra cash, or save money by selling or buying pre-loved
          dorm room essentials. All within the safety of our student community.
        </p>
        <div className={HeroCSS["btns-container"]}>
          <Button
            options={{
              type: "burgundy-filled",
              text: "Start selling",
              className: HeroCSS["how-it-works-btn"],
            }}
            onClick={() => navigate("/create-listing")}
          />
          <Button
            options={{
              type: "gray-outline",
              text: "Explore",
              className: HeroCSS["explore-btn"],
            }}
            onClick={() => navigate("/search")}
          />
        </div>
      </div>
      <img
        src={require("../../assets/hero_lyla.png")}
        alt=""
        className={HeroCSS["lyla-img"]}
      />
    </div>
  );
}

export default Hero;
