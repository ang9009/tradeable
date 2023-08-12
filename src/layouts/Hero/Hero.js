import { motion } from "framer-motion";
import { ReactComponent as LogoImg } from "../../assets/cis_logo.svg";
import { shareableTitle } from "../../data/homepageTitles";
import HeroCSS from "./Hero.module.css";
import HeroNavbar from "./components/HeroNavbar/HeroNavbar";

const banner = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const letterAnimation = {
  initial: { y: 50 },
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
      <div className={HeroCSS["title"]}>
        <div className={HeroCSS.logo}>
          <LogoImg fill={"#fff"} className={HeroCSS["logo-img"]} />
          <motion.span
            className={HeroCSS["letters-container"]}
            variants={banner}
            initial="initial"
            animate="animate"
          >
            {shareableTitle.map((letter, i) => (
              <motion.div
                className={HeroCSS["letter"]}
                variants={letterAnimation}
                key={i}
              >
                {letter}
              </motion.div>
            ))}
          </motion.span>
        </div>
        <p className={HeroCSS["desc"]}>
          Donate, buy, or sell pre-owned items within CIS
        </p>
      </div>
      <div className={HeroCSS["hero-bg"]}></div>
    </div>
  );
}

export default Hero;
