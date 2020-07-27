/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import api from '@/api/api';
import { SET_NEW_RESTAURANTS } from './mutation-types';

export default {
  async fetchNewRestaurants({ commit }) {
    api.fetchNewRestaurants((data) => {
      commit(SET_NEW_RESTAURANTS, data);
    }, (error) => {
      console.error(error);
    });
  },
};
