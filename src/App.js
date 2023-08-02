import { Route, Routes } from "react-router";
import { PrivateRoutes } from "./features/auth";
import { UserProvider } from "./context/UserContext";
import Modal from "react-modal";
import Navbar from "./layouts/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./layouts/Footer/Footer";
import CreateListing from "./pages/CreateListing/CreateListing";
import "./App.css";

// Library CSS files
import "react-loading-skeleton/dist/skeleton.css";
import SignIn from "./pages/SignIn/SignIn";

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
