/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import api from '@/api/api';
import {
  SET_NEW_RESTAURANTS, HIDE_NEW_RESTAURANTS_LOADER, HIDE_CATEGORIES_LOADER, SET_CATEGORIES,
} from './mutation-types';

export default {
  async fetchNewRestaurants({ commit }) {
    api.fetchNewRestaurants((data) => {
      commit(SET_NEW_RESTAURANTS, data);
      commit(HIDE_NEW_RESTAURANTS_LOADER);
    }, (error) => {
      console.error(error);
    });
  },
  async fetchCategories({ commit }) {
    api.fetchCategories((data) => {
      commit(SET_CATEGORIES, data);
      commit(HIDE_CATEGORIES_LOADER);
    }, (error) => {
      console.error(error);
    });
  },
};
