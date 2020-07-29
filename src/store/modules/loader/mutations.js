import { SET_LOADER } from './mutation-types';

export default {
  [SET_LOADER](state, payload) {
    state.loader = payload;
  },
};
