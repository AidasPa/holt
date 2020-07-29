<template>
  <div id="app">
    <navbar />
    <router-view :key="$route.fullPath" />
  </div>
</template>
<script>
import Navbar from '@/components/partials/Navbar/Navbar.vue';

export default {
  components: {
    Navbar,
  },
  mounted() {
    // this.$store.dispatch('restaurants/fetchNewRestaurants');
  },
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
