import {
  ADD_ITEM, REMOVE_ITEM, DEC_ITEM, INC_ITEM,
} from './mutation-typs';

export default {
  [ADD_ITEM](state, payload) {
    // eslint-disable-next-line max-len
    state.cart = [...state.cart, { restaurant: payload.restaurant, item: payload.item, quantity: 1 }];
  },
  [REMOVE_ITEM](state, payload) {
    // eslint-disable-next-line max-len
    const itemIndex = state.cart.findIndex((item) => item.item === payload.item && item.restaurant === payload.restaurant);
    state.cart.splice(itemIndex, 1);
  },
  [INC_ITEM](state, payload) {
    // eslint-disable-next-line max-len
    const itemIndex = state.cart.findIndex((item) => item.item === payload.item && item.restaurant === payload.restaurant);

    state.cart[itemIndex].quantity += 1;
  },
  [DEC_ITEM](state, payload) {
    // eslint-disable-next-line max-len
    const itemIndex = state.cart.findIndex((item) => item.item === payload.item && item.restaurant === payload.restaurant);
    state.cart[itemIndex].quantity -= 1;
  },
};
