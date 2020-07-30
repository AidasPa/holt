export default {
  getAddedItemsByRestaurantId: (state, getters, rootState, rootGetters) => (id) => {
    const restaurantItemIds = state.cart.filter((item) => item.restaurant === id);
    const items = [];

    restaurantItemIds.forEach((item) => {
      items.push({ ...rootGetters['menu/getMenuItemById'](item.item)[0], quantity: item.quantity });
    });
    return items;
  },
  getAddedItemCountById: (state) => (id) => state.cart.find((item) => item.item === id)?.quantity,
  // eslint-disable-next-line max-len
  getItemByIdAndRestaurantId: (state) => ({ item, restaurant }) => state.cart.findIndex((el) => el.item === item && el.restaurant === restaurant),
};
