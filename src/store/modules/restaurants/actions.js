/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import api from '@/api/api';
import { SET_NEW_RESTAURANTS, HIDE_NEW_RESTAURANTS_LOADER } from './mutation-types';

export default {
  async fetchNewRestaurants({ commit }) {
    api.fetchNewRestaurants((data) => {
      commit(SET_NEW_RESTAURANTS, data);
      setTimeout(() => {
        commit(HIDE_NEW_RESTAURANTS_LOADER);
      }, 2000);
    }, (error) => {
      console.error(error);
    });
  },
};
