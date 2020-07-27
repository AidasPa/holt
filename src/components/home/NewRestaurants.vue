<template>
  <span>
    <h4 class="header-title mt-5">New restaurants on Holt</h4>
    <d-row v-if="getLoader">
      <restaurant-card-loader
        v-for="index in 3"
        :key="index"
        :loading="true"
      />
    </d-row>
    <d-row v-else>
      <restaurant-card v-for="(item, i) in getRestaurants" :key="i" />
    </d-row>
  </span>
</template>

<script>
import { mapGetters } from 'vuex';

import RestaurantCard from '@/components/restaurant/RestaurantCard.vue';
import RestaurantCardLoader from '@/components/restaurant/RestaurantCardLoader.vue';

export default {
  components: {
    RestaurantCard,
    RestaurantCardLoader,
  },
  created() {
    this.$store.dispatch('restaurants/fetchNewRestaurants');
  },
  computed: mapGetters({
    getLoader: 'restaurants/getNewRestaurantsLoader',
    getRestaurants: 'restaurants/getNewRestaurants',
  }),
};
</script>
