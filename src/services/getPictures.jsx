//pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12

import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '31955836-4f23a30b6c1dc45c2c659779e';

export const getPictures = async (searchText, downloadingPage) => {
  console.log('in function', downloadingPage);
  const response = await axios.get(
    `${BASE_URL}/?q=${searchText}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12&page=${downloadingPage}`
  );
  return response.data.hits;
};

export default getPictures;

// const BASE_URL = 'https://pixabay.com/api';
// const API_KEY = '31955836-4f23a30b6c1dc45c2c659779e';

// const getPictures = searchText => {
//   return fetch(
//     `${BASE_URL}/?q=${searchText}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
//   );
// };

// export default getPictures;
