<template>
  <div id="app">
    <navbar />
    <router-view />
  </div>
</template>
<script>
import Navbar from '@/components/partials/Navbar/Navbar.vue';

export default {
  components: {
    Navbar,
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
