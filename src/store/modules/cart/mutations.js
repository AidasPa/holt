import { ADD_ITEM, REMOVE_ITEM } from './mutation-types';

export default {
  [ADD_ITEM](state, payload) {
    state.cart = [...state.cart, { restaurant: payload.restaurant, item: payload.item }];
  },
  [REMOVE_ITEM](state, payload) {
    // eslint-disable-next-line max-len
    const itemIndex = state.cart.findIndex((item) => item.id === payload.id && item.restaurant === payload.restaurant);
    state.cart.splice(itemIndex, 1);
  },
};
