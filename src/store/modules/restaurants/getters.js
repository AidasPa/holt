export default {
  getNewRestaurants: (state) => state.restaurants.filter((item) => item.new),
};
