export default () => ({
  loggedIn: 'jwt' in localStorage,
  user: {},
  login: {
    modal: false,
    errors: [],
  },
});
