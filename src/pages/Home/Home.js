import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { FiShare } from "react-icons/fi";
import Button from "../../components/ui/Button/Button";
import { ListingsCarousel } from "../../features/listing";
import Hero from "../../layouts/Hero/Hero";
import { db } from "../../lib/firebase";
import HomeCSS from "./Home.module.css";

function Home() {
  const [recentlyPosted, setRecentlyPosted] = useState([]);

  useEffect(() => {
    const listingsRef = collection(db, "listings");
    const listingsQuery = query(
      listingsRef,
      orderBy("timestamp", "desc"),
      orderBy("status", "desc"),
      limit(8)
    );
    getDocs(listingsQuery).then((res) => {
      setRecentlyPosted(res.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <>
      <Hero />
      <div className={HomeCSS["sell-section"]}>
        <h1 className={HomeCSS["section-title"]}>Make some extra cash</h1>
        <p className={HomeCSS["section-subtitle"]}>
          Tradeable makes it easy for you to earn all that money you spent on
          dorm essentials back.
        </p>
        <Button
          options={{
            type: "black-outline",
            text: "Learn how it works",
            className: HomeCSS["homepage-btn"],
          }}
        />
      </div>
      <div className={HomeCSS["buy-section"]}>
        <h1 className={HomeCSS["section-title"]}>
          Find great deals for your dorm room
        </h1>
        <p className={HomeCSS["section-subtitle"]}>
          Buy pre-loved items at great prices from other university students.
        </p>
        {recentlyPosted.length !== 0 && (
          <ListingsCarousel listings={recentlyPosted} />
        )}
      </div>
      <div className={HomeCSS["interested-section"]}>
        <div className={HomeCSS["interested-section-left"]}>
          <h1 className={HomeCSS["section-title"]}>
            Interested? Get started today
          </h1>
          <div className={HomeCSS["interested-section-btns"]}>
            <Button
              options={{
                type: "burgundy-filled",
                text: "Sign up",
                className: HomeCSS["homepage-btn"],
              }}
            />
            <Button
              options={{
                type: "black-outline",
                text: (
                  <div className={HomeCSS["share-btn-content"]}>
                    <FiShare size={"17px"} />
                    <p>Share</p>
                  </div>
                ),
                className: HomeCSS["homepage-btn"],
              }}
            />
          </div>
        </div>
        <img
          src={require("../../assets/verify_lyla_2.png")}
          alt=""
          className={HomeCSS["interested-lyla"]}
        />
      </div>
    </>
  );
}

export default Home;
