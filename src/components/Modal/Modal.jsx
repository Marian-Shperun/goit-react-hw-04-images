import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalEl } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleModal);
  }

  handleModal = e => {
    if (e.code === 'Escape') {
      this.props.close();
    }
  };

  handleModalClick = e => {
    if (e.currentTarget === e.target) {
      this.props.close();
    }
  };

  render() {
    return createPortal(
      <Overlay  onClick={this.handleModalClick}>
        <ModalEl>
          {/* <ModalClose onClick={this.props.close}>
            закрити
          </ModalClose> */}
          {this.props.children}
        </ModalEl>
      </Overlay>,
      modalRoot
    );
  }
}
