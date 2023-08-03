import Modal from "react-modal";
import { Route, Routes } from "react-router";
import "./App.css";
import { UserProvider } from "./context/UserContext";
import { PrivateRoutes } from "./features/auth";
import Footer from "./layouts/Footer/Footer";
import Navbar from "./layouts/Navbar/Navbar";
import CreateListing from "./pages/CreateListing/CreateListing";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";

// Library CSS files
import "react-loading-skeleton/dist/skeleton.css";

function App() {
  return (
    <div id="#root">
      <UserProvider>
        <Navbar />
        <div id="page-content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route element={<PrivateRoutes />}>
              <Route path="/create-listing" element={<CreateListing />} />
            </Route>
          </Routes>
        </div>
        <Footer />
      </UserProvider>
    </div>
  );
}

// Necessary for react-modal
Modal.setAppElement("#root");

export default App;
