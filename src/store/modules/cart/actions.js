import {
  ADD_ITEM, REMOVE_ITEM, INC_ITEM, DEC_ITEM,
} from './mutation-typs';

export default {
  addItem({ commit }, { restaurant, item }) {
    commit(ADD_ITEM, { restaurant, item });
  },
  removeItem({ commit }, { restaurant, item }) {
    commit(REMOVE_ITEM, { restaurant, item });
  },
  increaseItemQuantity({ commit }, { restaurant, item }) {
    commit(INC_ITEM, { restaurant, item });
  },
  decreaseItemQuantity({ commit }, { restaurant, item }) {
    commit(DEC_ITEM, { restaurant, item });
  },
};
