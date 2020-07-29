import api from '@/api/api';
import { SET_IS_LOGGED_IN, SET_USER } from './mutation-types';

export default {
  async login({ commit, dispatch }, { email, password }) {
    api.login((data) => {
      commit(SET_IS_LOGGED_IN, data);
      dispatch('fetchUser');
    }, (error) => {
      console.error(error);
    }, { email, password });
  },
  async fetchUser({ commit }) {
    api.fetchUser((data) => {
      commit(SET_USER, data);
    }, (error) => {
      console.warn(error);
    });
  },
};
