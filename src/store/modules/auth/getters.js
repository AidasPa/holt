export default {
  getUser: (state) => state.user,
  getIsLoggedIn: (state) => state.loggedIn,
  getLoginModal: (state) => state.login.modal,
  getLoginErrors: (state) => state.login.errors,
};
