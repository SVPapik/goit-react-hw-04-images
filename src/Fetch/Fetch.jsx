export default function fetchImg(value, page = 1) {
  const KEY = '29857828-96e75d784581bc88a50708d5e';
  const PARAMS = `key=${KEY}&q=${value}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${page}`;
  const URL = `https://pixabay.com/api/?${PARAMS}`;

  return fetch(URL)
    .then(resp => resp.json())
    .then(resp => {
      if (resp.totalHits === 0) {
        return Promise.reject(new Error('No hits'));
      }
      return resp;
    });
}
