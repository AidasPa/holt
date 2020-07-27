import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

function createApiInstance() {
  if ('token' in localStorage) {
    return;
  }

  // eslint-disable-next-line consistent-return
  return axios.create({
    baseURL: API_URL,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
}

const api = () => createApiInstance();

export default {
  async fetchNewRestaurants(success, failure) {
    try {
      const response = await api().get('/restaurants/recent');
      success(response.data);
    } catch (context) {
      console.log(context);
      failure(context.response.data);
    }
  },
};
