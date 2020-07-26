<template>
  <span>
    <hero-card />
    <new-restaurants />
    <div style="height:800px;"></div>
  </span>
</template>

<script>
import HeroCard from '@/components/home/HeroCard.vue';
import NewRestaurants from '@/components/home/NewRestaurants.vue';

export default {
  name: 'Home',
  components: {
    HeroCard,
    NewRestaurants,
  },
};
</script>
