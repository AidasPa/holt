<template>
  <span>
    <h4 class="header-title mt-5">New restaurants on Holt</h4>
    <restaurant-card />
  </span>
</template>

<script>
import RestaurantCard from '@/components/restaurant/RestaurantCard.vue';

export default {
  components: {
    RestaurantCard,
  },
};
</script>
