import Hero from "../../layouts/Hero/Hero";
import HomeCSS from "./Home.module.css";

function Home() {
  return (
    <div className={HomeCSS["home-page-container"]}>
      <Hero />
    </div>
  );
}

export default Home;
