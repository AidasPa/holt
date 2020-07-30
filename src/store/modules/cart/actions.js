import { ADD_ITEM } from './mutation-types';

export default {
  addItem({ commit }, { restaurant, item }) {
    commit(ADD_ITEM, { restaurant, item });
  },
};
