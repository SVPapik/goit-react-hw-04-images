import { useState } from 'react';
import { MdImageSearch } from 'react-icons/md';
import Notiflix from 'notiflix';
import PropTypes from 'prop-types';

import {
  SearchBar,
  SearchForm,
  SearchFormBtn,
  SearchFormBtnLabel,
  SearchFormInput,
} from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = e => {
    setInputValue(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (inputValue.trim() === '') {
      Notiflix.Notify.failure(
        `No name - no images. Please, input your request!`
      );
      return;
    }

    onSubmit(inputValue);
    setInputValue('');
  };

  return (
    <SearchBar>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormBtn type="submit">
          <MdImageSearch size={40} />
          <SearchFormBtnLabel>Search</SearchFormBtnLabel>
        </SearchFormBtn>
        <SearchFormInput
          value={inputValue}
          onChange={handleChange}
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchBar>
  );
};

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

Notiflix.Notify.init({
  distance: '10px',
  timeout: 2500,
});
