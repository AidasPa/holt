export default {
  getNewRestaurants: (state) => state.restaurants.filter((item) => item.new).slice(0, 3),
  getNewRestaurantsLoader: (state) => state.loader.newRestaurants,
  getCategories: (state) => state.categories.filter((item) => item.image !== null),
  getCategoriesLoader: (state) => state.loader.categories,
  getRestaurantById: ({ restaurants }) => (id) => {
    console.log(restaurants.find((item) => item.id === id));
    return restaurants.find((item) => item.id === id);
  },
};
