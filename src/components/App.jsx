import { useState, useEffect } from 'react';

import fetchImg from '../utils/fetch';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Loader from './Loader';

import { Container } from './App.styled';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState('idle');
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (inputValue && page) {
      setStatus('pending');

      fetchImg(inputValue, page)
        .then(resp => {
          const images = resp.hits;
          setImages(prevState => [...prevState, ...images]);
          setStatus('resolved');
        })
        .catch(error => {
          console.log(error);
          setStatus('rejected');
        });
    }
  }, [inputValue, page]);

  const handleFormSubmit = inputValue => {
    setInputValue(inputValue);
    setImages([]);
    setPage(1);
  };

  const loadMore = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <Container>
      <Searchbar onSubmit={handleFormSubmit} />
      {images && <ImageGallery data={images} />}
      {status === 'pending' && <Loader />}
      {images.length >= 12 && status === 'resolved' && (
        <Button onClick={loadMore} />
      )}
    </Container>
  );
};

export default App;
