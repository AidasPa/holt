export default () => ({
  loggedIn: 'jwt' in localStorage,
  user: {},
  loginModal: false,
});
