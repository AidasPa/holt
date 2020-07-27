<template>
  <span>
    <h4 class="header-title mt-5">New restaurants on Holt</h4>
    <d-row v-if="getLoader">
      <restaurant-card-loader v-for="index in 3" :key="index" :loading="true" />
    </d-row>
    <d-row v-else>
      <restaurant-card
        v-for="({
          title,
          image,
          description,
          rating,
          categories,
          avg_delivery_time,
          id
        },
        i) in getRestaurants"
        :key="i"
        :title="title"
        :description="description"
        :rating="rating"
        :categories="categories"
        :average-delivery-time="avg_delivery_time"
        :image="image"
        :id="id"
      />
    </d-row>
  </span>
</template>

<script>
import { mapGetters } from 'vuex';

import RestaurantCard from '@/components/common/RestaurantCard.vue';
import RestaurantCardLoader from '@/components/common/RestaurantCardLoader.vue';

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
