export default function fetchImg(inputValue, page) {
  const PARAMS = `key=${process.env.REACT_APP_KEY}&q=${inputValue}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${page}`;
  const URL = `https://pixabay.com/api/?${PARAMS}`;

  return fetch(URL).then(resp => {
    if (resp.ok) {
      return resp.json();
    }
    return Promise.reject(new Error());
  });
}

//key is in .env file
