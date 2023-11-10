import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { FiShare } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../../components/ui/Button/Button";
import { ListingsCarousel } from "../../features/listing";
import Hero from "../../layouts/Hero/Hero";
import { db } from "../../lib/firebase";
import HomeCSS from "./Home.module.css";

function Home() {
  const [recentlyPosted, setRecentlyPosted] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const listingsRef = collection(db, "listings");
    const listingsQuery = query(
      listingsRef,
      orderBy("timestamp", "desc"),
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
          Earn all that money you spent on dorm essentials back.
        </p>
        <Button
          options={{
            type: "black-filled",
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
          Buy second-hand items at great prices from other university students.
        </p>
        {recentlyPosted.length !== 0 && (
          <ListingsCarousel listings={recentlyPosted} />
        )}
        <Button
          options={{
            type: "gray-outline",
            text: "Browse more listings",
            className: HomeCSS["homepage-btn"],
          }}
          onClick={() => navigate("/search")}
        />
      </div>
      <div className={HomeCSS["interested-section"]}>
        <div className={HomeCSS["interested-section-left"]}>
          <h1 className={HomeCSS["section-title"]}>Get started today</h1>
          <div className={HomeCSS["interested-section-btns"]}>
            <Button
              options={{
                type: "white-filled",
                text: "Sign up",
                className: HomeCSS["homepage-btn"],
              }}
              onClick={() => navigate("/signup")}
            />
            <CopyToClipboard text={"http://tradeable.gg/"}>
              <Button
                options={{
                  type: "black-filled",
                  text: (
                    <div className={HomeCSS["share-btn-content"]}>
                      <FiShare size={"17px"} />
                      <p>Share</p>
                    </div>
                  ),
                  className: HomeCSS["homepage-btn"],
                }}
                onClick={() =>
                  toast.success("Link copied to clipboard", {
                    autoClose: 3000,
                    theme: "colored",
                  })
                }
              />
            </CopyToClipboard>
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
