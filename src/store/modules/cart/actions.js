import { ADD_ITEM, REMOVE_ITEM } from './mutation-types';

export default {
  addItem({ commit }, { restaurant, item }) {
    commit(ADD_ITEM, { restaurant, item });
  },
  removeItem({ commit }, { restaurant, item }) {
    commit(REMOVE_ITEM, { restaurant, item });
  },
};
