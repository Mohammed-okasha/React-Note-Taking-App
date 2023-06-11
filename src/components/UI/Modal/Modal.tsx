import ReactDOM from "react-dom";
import Backdrop from "./Backdrop";
import ModalBox from "./ModalBox";

const overlays = document.getElementById("overlays") as HTMLElement;

interface ModalProps {
  onCloseModal: () => void;
  children: React.ReactNode;
}

const Modal = ({ onCloseModal, children }: ModalProps) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={onCloseModal} />, overlays)}
      {ReactDOM.createPortal(<ModalBox>{children}</ModalBox>, overlays)}
    </>
  );
};

export default Modal;
