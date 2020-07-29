import Vue from 'vue';
import Vuex from 'vuex';

import restaurants from './modules/restaurants';
import menu from './modules/menu';
import auth from './modules/auth';
import loader from './modules/loader';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    restaurants,
    menu,
    auth,
    loader,
  },
});
