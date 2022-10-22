import React, { Component } from 'react';
import { Backdrop, ModalContent } from './Modal.styled';

class Modal extends Component {
  render() {
    return (
      <Backdrop>
        <ModalContent>{this.props.children}</ModalContent>
      </Backdrop>
    );
  }
}

export default Modal;
