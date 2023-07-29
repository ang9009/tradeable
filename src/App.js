import "./App.css";
import Navbar from "./layouts/Navbar/Navbar";
import Modal from "react-modal";

function App() {
  return (
    <div id="#root">
      <Navbar />
    </div>
  );
}

Modal.setAppElement("#root");

export default App;
