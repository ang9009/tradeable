import Modal from "react-modal";
import { Route, Routes } from "react-router";
import "./App.css";
import {
  AccountSettingsRoute,
  PrivateRoutes,
  VerifyRoutes,
} from "./features/auth";
import Home from "./pages/Home/Home";

// Library CSS files
import "react-loading-skeleton/dist/skeleton.css";
import "react-tooltip/dist/react-tooltip.css";
import "swiper/css";
import AppLayout from "./layouts/AppLayout/AppLayout";
import Listing from "./pages/Listing/Listing";

// Swiper register
import { ToastContainer } from "react-toastify";
import { register } from "swiper/element/bundle";
import EditListingRoute from "./features/auth/components/EditListingRoute/EditListingRoute";
import ListingRoute from "./features/listing/components/ListingRoute/ListingRoute";
import AccountSettings from "./pages/AccountSettings/AccountSettings";
import CreateListing from "./pages/CreateListing/CreateListing";
import EditListing from "./pages/EditListing/EditListing";
import Login from "./pages/Login/Login";
import Messages from "./pages/Messages/Messages";
import NotFound from "./pages/NotFound/NotFound";
import Profile from "./pages/Profile/Profile";
import Search from "./pages/Search/Search";
import Signup from "./pages/Signup/Signup";
import Verify from "./pages/Verify/Verify";

function App() {
  // Registers Swiper custom elements (carousel)
  register();

  return (
    <div id="#root">
      {/* For react toastify */}
      <ToastContainer />
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/verify" element={<Verify />} />
          <Route element={<VerifyRoutes />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/search/:category?" element={<Search />} />
            <Route path="/profile/:userId/:page" element={<Profile />} />
            <Route element={<ListingRoute />}>
              <Route path="/listing/:listingId" element={<Listing />} />
            </Route>
            <Route path="*" element={<NotFound />} />
            <Route element={<PrivateRoutes />}>
              <Route path="/create-listing" element={<CreateListing />} />
              <Route path="/messages">
                <Route index element={<Messages />} />
                <Route path=":chatId" element={<Messages />} />
              </Route>
              <Route element={<EditListingRoute />}>
                <Route
                  path="/edit-listing/:listingId"
                  element={<EditListing />}
                />
              </Route>
              <Route element={<AccountSettingsRoute />}>
                <Route
                  path="/account-settings/:userId"
                  element={<AccountSettings />}
                />
              </Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

// Necessary for react-modal
Modal.setAppElement("#root");

export default App;
