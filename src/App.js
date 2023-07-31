import "./App.css";
import { UserProvider } from "./context/UserContext";
import Navbar from "./layouts/Navbar/Navbar";
import Modal from "react-modal";

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
