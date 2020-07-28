import api from '@/api/api';
import { SET_MENU } from './mutation-types';

export default {
  async fetchRestaurantMenu({ commit }, id) {
    api.fetchRestaurantMenu((data) => {
      commit(SET_MENU, data);
    }, (context) => {
      console.log(context);
    }, id);
  },
};
