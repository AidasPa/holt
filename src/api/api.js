import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

function createApiInstance() {
  if ('jwt' in localStorage) {
    return axios.create({
      baseURL: API_URL,
      headers: {
        Accept: 'application/json',
        // 'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.jwt}`,
      },
    });
  }
  return axios.create({
    baseURL: API_URL,
    headers: {
      Accept: 'application/json',
      // 'Content-Type': 'application/json',
    },
  });

  // eslint-disable-next-line consistent-return
}

const api = () => createApiInstance();

export default {
  async fetchNewRestaurants(success, failure) {
    try {
      const response = await api().get('/restaurants/recent');
      success(response.data);
    } catch (context) {
      failure(context.response.data);
    }
  },
  async fetchCategories(success, failure) {
    try {
      const response = await api().get('/categories');
      success(response.data);
    } catch (context) {
      failure(context.response.data);
    }
  },
  async fetchRestaurant(success, failure, id) {
    try {
      const response = await api().get(`/restaurants/${id}`);
      success(response.data);
    } catch (context) {
      failure(context);
    }
  },

  async fetchRestaurantMenu(success, failure, id) {
    try {
      const response = await api().get(`/restaurants/${id}/menu`);
      success(response.data);
    } catch (context) {
      failure(context);
    }
  },

  async login(success, failure, { email, password }) {
    try {
      const response = await api().post('/auth/login', {}, { params: { email, password } });
      success(response.data);
    } catch (context) {
      failure(context);
    }
  },

  async logout(success, failure) {
    try {
      await api().post('/auth/logout');
      success();
    } catch (context) {
      failure(context);
    }
  },

  async fetchUser(success, failure) {
    try {
      const response = await api().get('/user');
      success(response.data);
    } catch (context) {
      failure(context);
    }
  },

  async fetchSearchResults(success, failure, query) {
    try {
      const response = await api().get(`/restaurants/search?query=${query}`);
      success(response.data);
    } catch (context) {
      failure(context);
    }
  },

  async fetchGeocodingAddress(success, failure, address) {
    try {
      const response = axios.get(`https://nominatim.openstreetmap.org/search?q=${address}&format=json`);
      success(response.data);
    } catch (context) {
      failure(context);
    }
  },
};
