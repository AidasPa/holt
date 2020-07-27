import Vue from 'vue';
import ShardsVue from 'shards-vue';
import Fragment from 'vue-fragment';
import twemoji from 'twemoji';

import App from './App.vue';
import router from './router';
import store from './store';

import 'bootstrap/dist/css/bootstrap.css';
import 'shards-ui/dist/css/shards.css';

Vue.use(ShardsVue);
Vue.use(Fragment.Plugin);

Vue.directive('emoji', {
  inserted(el) {
    // eslint-disable-next-line no-param-reassign
    el.innerHTML = twemoji.parse(el.innerHTML);
  },
});
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
