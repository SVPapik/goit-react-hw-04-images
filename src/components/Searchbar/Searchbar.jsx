import { Component } from 'react';
import { MdImageSearch } from 'react-icons/md';
import Notiflix from 'notiflix';
import {
  SearchBar,
  SearchForm,
  SearchFormBtn,
  SearchFormBtnLabel,
  SearchFormInput,
} from './Searchbar.styled';

class Searchbar extends Component {
  state = {
    inputValue: '',
  };

  handleChange = e => {
    this.setState({ inputValue: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.inputValue.trim() === '') {
      Notiflix.Notify.failure('Please, input your request!');
      return;
    }

    this.props.onSubmit(this.state.inputValue);
    this.setState({ inputValue: '' });
  };

  render() {
    return (
      <SearchBar>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormBtn type="submit">
            <MdImageSearch size={40} />
            <SearchFormBtnLabel>Search</SearchFormBtnLabel>
          </SearchFormBtn>
          <SearchFormInput
            value={this.state.inputValue}
            onChange={this.handleChange}
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchBar>
    );
  }
}

export default Searchbar;
