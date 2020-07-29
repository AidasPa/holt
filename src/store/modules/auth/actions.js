import api from '@/api/api';
import { SET_IS_LOGGED_IN, SET_USER } from './mutation-types';

export default {
  async login({ commit, dispatch }, { email, password }) {
    api.login((data) => {
      dispatch('loader/setLoader', true, { root: true });
      commit(SET_IS_LOGGED_IN, data);
      dispatch('fetchUser');
    }, (error) => {
      console.error(error);
    }, { email, password });
  },
  async fetchUser({ commit, dispatch }, { shouldStopLoader = true }) {
    api.fetchUser((data) => {
      commit(SET_USER, data);
      if (shouldStopLoader) dispatch('loader/setLoader', false, { root: true });
    }, (error) => {
      console.warn(error);
    });
  },
};
