import {
  SET_USER, SET_IS_LOGGED_IN, TOGGLE_LOGIN_MODAL, SET_IS_LOGGED_OUT, SET_LOGIN_ERRORS,
} from './mutation-types';

export default {
  [SET_USER](state, payload) {
    state.user = payload;
    state.loggedIn = true;
  },
  [SET_IS_LOGGED_IN](state, payload) {
    localStorage.setItem('jwt', payload.token);
    state.loggedIn = true;
  },
  [TOGGLE_LOGIN_MODAL](state) {
    state.login.modal = !state.login.modal;
  },
  [SET_IS_LOGGED_OUT](state) {
    localStorage.removeItem('jwt');
    state.loggedIn = false;
  },
  [SET_LOGIN_ERRORS](state, payload) {
    let errors = [];
    Object.keys(payload).forEach((error) => {
      errors = [...errors, ...payload[error]];
    });
    state.login.errors = errors;
  },
};
