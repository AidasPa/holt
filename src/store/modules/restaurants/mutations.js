import {
  SET_NEW_RESTAURANTS, HIDE_NEW_RESTAURANTS_LOADER, HIDE_CATEGORIES_LOADER, SET_CATEGORIES,
} from './mutation-types';

export default {
  [SET_NEW_RESTAURANTS](state, payload) {
    const newRestaurants = [];
    payload.forEach((restaurant) => {
      newRestaurants.push({ ...restaurant, new: true });
    });
    state.restaurants = newRestaurants;
  },
  [SET_CATEGORIES](state, payload) {
    state.categories = payload;
  },
  [HIDE_NEW_RESTAURANTS_LOADER](state) {
    state.loader.newRestaurants = false;
  },
  [HIDE_CATEGORIES_LOADER](state) {
    state.loader.categories = false;
  },

};
