import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalEl } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children, close }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleModal);
  });

  const handleModal = e => {
    if (e.code === 'Escape') {
      close();
    }
  };

  const handleModalClick = e => {
    if (e.currentTarget === e.target) {
      close();
    }
  };

  return createPortal(
    <Overlay onClick={handleModalClick}>
      <ModalEl>
        {/* <ModalClose onClick={this.props.close}>
            закрити
          </ModalClose> */}
        {children}
      </ModalEl>
    </Overlay>,
    modalRoot
  );
};
export default Modal;
