import ReactModal from "react-modal";
import ModalCSS from "./Modal.module.css";

const Modal = ({ isOpen, handleClose, styles, children, title }) => {
  return (
    <ReactModal isOpen={isOpen} onRequestClose={handleClose} style={styles}>
      <div className={ModalCSS["modal-top"]}>
        <h1 className={ModalCSS["modal-title"]}>{title}</h1>
      </div>
      <div className={ModalCSS["modal-bottom"]}>{children}</div>
    </ReactModal>
  );
};

export default Modal;
