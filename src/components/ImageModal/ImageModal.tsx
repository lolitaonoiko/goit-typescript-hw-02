import Modal from 'react-modal';

import style from './ImageModal.module.css';
import { FC } from 'react';

import { ImageModalProps } from '../../types';

Modal.setAppElement('#root');

const ImageModal: FC<ImageModalProps> = ({
  modalIsOpen,
  closeModal,
  modalUrl,
  modalAlt,
}: ImageModalProps) => {
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
};

export default ImageModal;
