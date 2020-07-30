import Vue from 'vue';
import ShardsVue from 'shards-vue';
import Fragment from 'vue-fragment';
import VueBlurHash from 'vue-blurhash';

import App from './App.vue';
import router from './router';
import store from './store';

import 'bootstrap/dist/css/bootstrap.css';
import 'shards-ui/dist/css/shards.css';
import 'vue-blurhash/dist/vue-blurhash.css';
import 'vue-loading-overlay/dist/vue-loading.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all';

Vue.use(ShardsVue);
Vue.use(Fragment.Plugin);
Vue.use(VueBlurHash);

Vue.directive('click-outside', {
  bind(el, binding, vnode) {
    // eslint-disable-next-line no-param-reassign
    el.clickOutsideEvent = function (event) {
      if (!(el === event.target || el.contains(event.target))) {
        vnode.context[binding.expression](event);
      }
    };
    document.body.addEventListener('click', el.clickOutsideEvent);
  },
  unbind(el) {
    document.body.removeEventListener('click', el.clickOutsideEvent);
  },
});

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
