import { SET_NEW_RESTAURANTS, HIDE_NEW_RESTAURANTS_LOADER } from './mutation-types';

export default {
  [SET_NEW_RESTAURANTS](state, payload) {
    const newRestaurants = [];
    payload.forEach((restaurant) => {
      newRestaurants.push({ ...restaurant, new: true });
    });
    state.restaurants = [...state.restaurants, ...newRestaurants];
  },
  [HIDE_NEW_RESTAURANTS_LOADER](state) {
    state.loader.newRestaurants = false;
  },

};
