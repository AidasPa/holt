<template>
  <span>
    <h4 class="header-title mt-5">New restaurants on Holt</h4>
    <d-row>
      <restaurant-card />
      <restaurant-card />
      <restaurant-card />
    </d-row>
  </span>
</template>

<script>
import RestaurantCard from '@/components/restaurant/RestaurantCard.vue';
import { mapActions } from 'vuex';

export default {
  components: {
    RestaurantCard,
  },
  created() {
    this.$store.dispatch('restaurants/fetchNewRestaurants');
  },
  methods: mapActions(['restaurants']),
};
</script>
