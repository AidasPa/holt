import { ADD_ITEM } from './mutation-types';

export default {
  [ADD_ITEM](state, payload) {
    if (payload.restaurant in state.cart) {
      state.cart[payload.restaurant] = [...state.cart[payload.restaurant], payload.item];
    } else {
      state.cart[payload.restaurant] = [payload.item];
    }
  },
};
