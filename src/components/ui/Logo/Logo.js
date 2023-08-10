import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ReactComponent as LogoImg } from "../../../assets/cis_logo.svg";
import LogoCSS from "./Logo.module.css";

const banner = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const letterAnimation = {
  initial: { y: 20 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

function Logo({ color, logoColor, isHero }) {
  const title = ["s", "h", "a", "r", "e", "a", "b", "l", "e"];

  return (
    <Link to="/" className={LogoCSS.logo}>
      <LogoImg
        fill={logoColor || color}
        className={LogoCSS["logo-img"]}
        style={{ animationName: !isHero && "slideUpAndFade" }}
      />
      <motion.span
        className={LogoCSS["letters-container"]}
        variants={isHero && banner}
        initial="initial"
        animate="animate"
      >
        {title.map((letter, i) => (
          <motion.div
            style={{ color: color }}
            className={LogoCSS["letter"]}
            variants={isHero && letterAnimation}
            key={i}
          >
            {letter}
          </motion.div>
        ))}
      </motion.span>
    </Link>
  );
}

export default Logo;
