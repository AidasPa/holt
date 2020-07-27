export default {
  getNewRestaurants: (state) => state.restaurants.filter((item) => item.new).slice(0, 3),
  getNewRestaurantsLoader: (state) => state.loader.newRestaurants,
};
