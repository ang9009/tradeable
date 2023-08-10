import Logo from "../../components/ui/Logo/Logo";
import HeroCSS from "./Hero.module.css";

function Hero() {
  return (
    <div className={HeroCSS["hero-container"]}>
      <Logo color={"#fff"} />
      <div className={HeroCSS["hero-bg"]}></div>
    </div>
  );
}

export default Hero;
