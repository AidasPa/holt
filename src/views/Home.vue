<template>
  <span>
    <hero-card />
    <new-restaurants />
    <categories />
    <div style="height:800px;"></div>
  </span>
</template>

<script>
import HeroCard from '@/components/home/HeroCard.vue';
import NewRestaurants from '@/components/home/NewRestaurants.vue';
import Categories from '@/components/home/Categories.vue';

export default {
  name: 'Home',
  components: {
    HeroCard,
    NewRestaurants,
    Categories,
  },
};
</script>
<style lang="scss">
.header-title {
  padding-bottom: 10px;
}
</style>
