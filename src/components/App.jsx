import React, { Component } from 'react';
import { Container } from './App.styled';
import Searchbar from './Searchbar';
import fetchImg from '../Fetch/Fetch';
import Modal from './Modal';

class App extends Component {
  state = {
    inputValue: '',
    page: 1,
    status: 'idle',
    images: [],
    error: null,
    showModal: false,
  };

  componentDidUpdate = (prevProps, prevState) => {
    const { inputValue, page } = this.state;
    if (prevState.inputValue !== inputValue || prevState.page !== page) {
      this.setState({ status: 'pending' });

      fetchImg(inputValue)
        .then(resp => {
          const images = resp.hits.map(
            ({ id, webformatURL, largeImageURL, tags }) => {
              return {
                id: id,
                webformatURL: webformatURL,
                largeImageURL: largeImageURL,
                tags: tags,
              };
            }
          );
          console.log(images);
          this.setState(prevState => ({
            images: [...prevState.images, ...images],
            status: 'resolved',
          }));
        })
        .catch(error => {
          this.setState({ error, status: 'rejected' });
        });
    }
  };

  handleFormSubmit = inputValue => {
    this.setState({ inputValue: inputValue });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { showModal } = this.state;
    return (
      <Container>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {showModal && <Modal onClose={this.toggleModal}></Modal>}
      </Container>
    );
  }
}

export default App;
