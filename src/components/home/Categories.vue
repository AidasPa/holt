<template>
  <span>
    <h4 class="header-title mt-5">Categories</h4>
    <d-row v-if="loader">
      <category-card-loader v-for="i in 8" :key="i" />
    </d-row>
    <d-row v-else>
      <category-card
        v-for="{ title, image, restaurant_count, id } in categories"
        :key="id"
        :title="title"
        :image="image"
        :count="restaurant_count"
      />
    </d-row>
  </span>
</template>

<script>
import { mapGetters } from 'vuex';

import CategoryCard from '@/components/common/CategoryCard.vue';
import CategoryCardLoader from '@/components/common/CategoryCardLoader.vue';

export default {
  components: {
    CategoryCard,
    CategoryCardLoader,
  },
  created() {
    this.$store.dispatch('restaurants/fetchCategories');
  },
  computed: mapGetters({
    loader: 'restaurants/getCategoriesLoader',
    categories: 'restaurants/getCategories',
  }),
};
</script>

<style>
</style>
