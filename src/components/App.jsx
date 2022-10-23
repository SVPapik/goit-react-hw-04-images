import React, { Component } from 'react';
import { Container } from './App.styled';
import Searchbar from './Searchbar';
import fetchImg from '../Fetch/Fetch';
import ImageGallery from './ImageGallery';
import Button from './Button';

class App extends Component {
  state = {
    inputValue: '',
    page: 1,
    status: 'idle',
    images: [],
    error: null,
  };

  componentDidUpdate = (prevProps, prevState) => {
    const { inputValue, page } = this.state;
    if (prevState.inputValue !== inputValue || prevState.page !== page) {
      this.setState({ status: 'pending' });

      fetchImg(inputValue, page)
        .then(resp => {
          const images = resp.hits;
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
    this.setState({ inputValue: inputValue, images: [], page: 1 });
  };

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images, status } = this.state;
    return (
      <Container>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {images && <ImageGallery data={images} />}
        {images.length >= 12 && status === 'resolved' && (
          <Button onClick={this.loadMore} />
        )}
      </Container>
    );
  }
}

export default App;
