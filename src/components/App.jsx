import React, { Component } from 'react';
import { Container } from './App.styled';
import Modal from './Modal';

class App extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { showModal } = this.state;
    return (
      <Container>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <h1>hello</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              repudiandae accusantium impedit ea aut deleniti, corporis fugiat
              laborum consectetur assumenda!
            </p>
          </Modal>
        )}
      </Container>
    );
  }
}

export default App;
