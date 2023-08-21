import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import AppLayoutCSS from "./AppLayout.module.css";

function AppLayout() {
  return (
    <>
      <Navbar />
      {/* Makes sure page content spans at least the entire viewport */}
      <div className={AppLayoutCSS["page-content-container"]}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default AppLayout;
