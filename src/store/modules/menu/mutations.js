import { SET_MENU } from './mutation-types';

export default {
  [SET_MENU](state, payload) {
    state.menu = {
      items: payload.menu_items,
      categories: payload.menu_categories,
    };
  },
};
