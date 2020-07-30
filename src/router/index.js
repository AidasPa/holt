import Vue from 'vue';
import VueRouter from 'vue-router';

import store from '@/store';

import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      shouldStopLoader: true,
    },
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/restaurant/:id',
    name: 'Restaurant',
    props: true,
    component: () => import(/* webpackChunkName: "about" */ '../views/Restaurant.vue'),
  },
  {
    path: '/restaurant/:id/checkout',
    name: 'Checkout',
    props: true,
    meta: {
      shouldStopLoader: true,
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/Checkout.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);

  if ('jwt' in localStorage) {
    store.dispatch('loader/setLoader', true);
    store.dispatch('auth/fetchUser', {
      shouldStopLoader: 'shouldStopLoader' in to.meta && to.meta.shouldStopLoader,
    });
  }
  return next();
});

export default router;
