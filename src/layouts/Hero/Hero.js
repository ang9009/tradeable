import { motion } from "framer-motion";
import HeroCSS from "./Hero.module.css";
import HeroNavbar from "./components/HeroNavbar/HeroNavbar";

const banner = {
  initial: { y: 200 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

function Hero() {
  return (
    <div className={HeroCSS["hero-container"]}>
      <HeroNavbar />
      <div className={HeroCSS["hero-text"]}>
        <div className={HeroCSS["title-container"]}>
          <motion.span
            className={HeroCSS["title"]}
            variants={banner}
            initial="initial"
            animate="animate"
          >
            Donate your second-hand items
          </motion.span>
        </div>
        <p className={HeroCSS["desc"]}>
          Take part in our sustainable initiatve! Offer your second-hand items
          to other members of CIS via shareable.
        </p>
        <button className={HeroCSS["fat-btn"]}>Get started</button>
      </div>
      <div className={HeroCSS["hero-bg"]}></div>
    </div>
  );
}

export default Hero;
