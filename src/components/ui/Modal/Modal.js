import { FiX } from "react-icons/fi";
import ReactModal from "react-modal";
import { modalStyles } from "../../../data/modalStyles";
import ModalCSS from "./Modal.module.css";

function Modal({ isOpen, handleClose, children, title }) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={handleClose}
      style={modalStyles}
    >
      <div className={ModalCSS["modal-content"]}>
        <FiX
          className={ModalCSS["close-btn"]}
          size={"25px"}
          onClick={handleClose}
        />
        <div className={ModalCSS["modal-top"]}>
          <h1 className={ModalCSS["modal-title"]}>{title}</h1>
        </div>
        <div className={ModalCSS["modal-bottom"]}>{children}</div>
      </div>
    </ReactModal>
  );
}

export default Modal;
