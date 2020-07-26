<template>
  <div id="app">
    <navbar />
    <d-row class="holt-row mt-4">
      <d-col :md="7" :xs="12">
        <router-view />
      </d-col>
    </d-row>
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
.holt-row {
  justify-content: center;
}
</style>
