<template>
  <div id="app">
    <loading
      :active="loader"
      :can-cancel="false"
      :is-full-page="true"
      :opacity="0.9"
    />
    <navbar />
    <router-view :key="$route.fullPath" />
  </div>
</template>
<script>
import Loading from 'vue-loading-overlay';

import Navbar from '@/components/partials/Navbar/Navbar.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    Navbar,
    Loading,
  },
  computed: mapGetters('loader', {
    loader: 'getLoader',
  }),
};
</script>
<style lang="scss">
body {
  overflow-x: hidden;
}
.holt-row {
  justify-content: center;
}
</style>
