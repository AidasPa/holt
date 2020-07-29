import { SET_USER, SET_IS_LOGGED_IN } from './mutation-types';

export default {
  [SET_USER](state, payload) {
    state.user = payload;
  },
  [SET_IS_LOGGED_IN](state, payload) {
    localStorage.setItem('jwt', payload.token);
    state.loggedIn = true;
  },
};
