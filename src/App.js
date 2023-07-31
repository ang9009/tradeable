import "./App.css";
import { UserProvider } from "./context/UserContext";
import Navbar from "./layouts/Navbar/Navbar";
import Modal from "react-modal";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Footer from "./layouts/Footer/Footer";
import CreateListing from "./pages/CreateListing/CreateListing";

// Library CSS files
import "react-loading-skeleton/dist/skeleton.css";

function App() {
  return (
    <div id="#root">
      <UserProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-listing" element={<CreateListing />} />
        </Routes>
        <Footer />
      </UserProvider>
    </div>
  );
}

Modal.setAppElement("#root");

export default App;
