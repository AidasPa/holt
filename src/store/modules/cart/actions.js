import {
  ADD_ITEM, REMOVE_ITEM, INC_ITEM, DEC_ITEM,
} from './mutation-types';

export default {
  addItem({ commit }, { restaurant, item }) {
    commit(ADD_ITEM, { restaurant, item });
  },
  removeItem({ commit }, { restaurant, item }) {
    commit(REMOVE_ITEM, { restaurant, item });
  },
  increaseItemCount({ commit }, { restaurant, item }) {
    commit(INC_ITEM, { restaurant, item });
  },
  decreaseItemCount({ commit }, { restaurant, item }) {
    commit(DEC_ITEM, { restaurant, item });
  },
};
