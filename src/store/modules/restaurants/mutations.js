import { SET_NEW_RESTAURANTS } from './mutation-types';

export default {
  [SET_NEW_RESTAURANTS](state, payload) {
    const newRestaurants = [];
    payload.forEach((restaurant) => {
      newRestaurants.push({ ...restaurant, new: true });
    });
    state.restaurants = [...state.restaurants, ...newRestaurants];
  },
};
