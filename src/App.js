import "./App.css";
import { UserProvider } from "./context/UserContext";
import Navbar from "./layouts/Navbar/Navbar";
import Modal from "react-modal";

// Library CSS files
import "react-loading-skeleton/dist/skeleton.css";

function App() {
  return (
    <div id="#root">
      <UserProvider>
        <Navbar />
      </UserProvider>
    </div>
  );
}

Modal.setAppElement("#root");

export default App;
