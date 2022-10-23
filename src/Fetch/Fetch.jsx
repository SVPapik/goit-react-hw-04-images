export default function fetchImg(inputValue, page) {
  const KEY = '29857828-96e75d784581bc88a50708d5e';
  const PARAMS = `key=${KEY}&q=${inputValue}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${page}`;
  const URL = `https://pixabay.com/api/?${PARAMS}`;

  return fetch(URL).then(resp => {
    if (resp.ok) {
      return resp.json();
    }
    return Promise.reject(new Error());
  });
}
