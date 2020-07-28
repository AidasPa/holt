export default {
  getMenuCategories: ({ menu }) => menu.categories,
  // eslint-disable-next-line arrow-body-style
  getMenuItemsByCategoryId: ({ menu }) => (id) => {
    // console.log(menu.items[0].category_id, id);/
    return menu.items.filter((item) => item.category_id === id);
  },
};
