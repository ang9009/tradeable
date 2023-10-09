import HeroCSS from "./Hero.module.css";

function Hero() {
  return (
    <div className={HeroCSS["hero-text"]}>
      {/* <span className={HeroCSS["title"]}>
        An online marketplace for college students in London
      </span>
      <p className={HeroCSS["desc"]}>
        Make some extra cash, or save money by selling or buying pre-loved dorm
        room essentials. All within the safety of our student community.
      </p>
      <div className={HeroCSS["btns-container"]}>
        <Button
          options={{
            type: "burgundy-filled",
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
      </div> */}
    </div>
  );
}

export default Hero;
