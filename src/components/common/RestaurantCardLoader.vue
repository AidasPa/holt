<template>
  <d-col :md="4" :xs="12" v-if="loading">
    <content-loader />
    <bullet-list-loader />
  </d-col>
</template>

<script>
import { ContentLoader, BulletListLoader } from 'vue-content-loader';

export default {
  props: {
    loading: Boolean,
  },
  components: {
    ContentLoader,
    BulletListLoader,
  },
};
</script>
