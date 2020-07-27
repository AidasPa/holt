<template>
  <d-col :md="3">
    <content-loader
      :width="400"
      :height="500"
      :speed="2"
      primaryColor="#f3f3f3"
      secondaryColor="#ecebeb"
    >
      <!-- <rect x="493" y="518" rx="2" ry="2" width="140" height="10" /> -->
      <rect x="0" y="0" rx="10" ry="10" width="405" height="405" />
      <rect x="0" y="440" rx="0" ry="0" width="258" height="29" />
      <rect x="0" y="480" rx="0" ry="0" width="258" height="29" />
    </content-loader>
  </d-col>
</template>

<script>
import { ContentLoader } from 'vue-content-loader';

export default {
  components: {
    ContentLoader,
  },
};
</script>

<style>
</style>
