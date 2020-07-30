export default {
  getAddedItemsByRestaurantId: (state, getters, rootState, rootGetters) => (id) => {
    const restaurantItemIds = state.cart.filter((item) => item.restaurant === id);
    const items = [];

    restaurantItemIds.forEach((item) => {
      items.push(...rootGetters['menu/getMenuItemById'](item.item));
    });
    return items;
  },
  getAddedItemCountById: (state) => (id) => {
    return state.cart.filter(item => item.id === id).quantity
  }