import { SET_LOADER } from './mutation-types';

export default {
  // TODO: Sugalvoti geresni pavadinima 'payload'
  setLoader({ commit }, payload) {
    commit(SET_LOADER, payload);
  },
};
