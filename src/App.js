import Modal from "react-modal";
import { Route, Routes } from "react-router";
import "./App.css";
import { PrivateRoutes } from "./features/auth";
import CreateListing from "./pages/CreateListing/CreateListing";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";

// Library CSS files
import "react-loading-skeleton/dist/skeleton.css";
import "swiper/css";
import AppLayout from "./layouts/AppLayout/AppLayout";
import Listing from "./pages/Listing/Listing";

// Swiper register
import { register } from "swiper/element/bundle";

function App() {
  // Registers Swiper custom elements (carousel)
  register();

  return (
    <div id="#root">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<AppLayout />}>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/listing" element={<Listing />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/create-listing" element={<CreateListing />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

// Necessary for react-modal
Modal.setAppElement("#root");

export default App;
