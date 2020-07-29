import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

function createApiInstance() {
  if ('jwt' in localStorage) {
    return axios.create({
      baseURL: API_URL,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.jwt}`,
      },
    });
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
      const response = await api().post('/auth/login', {
        email, password,
      });
      success(response.data);
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
};
