import React, { Component } from 'react';
import Modal from './Modal';

class App extends Component {
  state = {
    showModal: true,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { showModal } = this.state;
    return (
      <div>
        {showModal && (
          <Modal>
            <h1>hello</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              repudiandae accusantium impedit ea aut deleniti, corporis fugiat
              laborum consectetur assumenda!
            </p>
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
