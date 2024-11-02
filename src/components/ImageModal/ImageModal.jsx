import Modal from "react-modal";

import style from "./ImageModal.module.css";

Modal.setAppElement("#root");

function ImageModal({ modalIsOpen, closeModal, modalUrl, modalAlt }) {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      closeTimeoutMS={250}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      className={style.modal}
      overlayClassName={style.overlay}
    >
      <img className={style.modalImg} src={modalUrl} alt={modalAlt} />
    </Modal>
  );
}

export default ImageModal;
