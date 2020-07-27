<template>
  <span>
    <restaurant-image :image="image" />
    <d-row class="holt-row mt-4">
      <d-col :md="7" :xs="12">
        <restaurant-header />
        <restaurant-bar />
      </d-col>
    </d-row>
  </span>
</template>
<script>
import RestaurantImage from '@/components/restaurant/RestaurantImage.vue';
import RestaurantHeader from '@/components/restaurant/RestaurantHeader.vue';
import RestaurantBar from '@/components/restaurant/RestaurantBar.vue';

export default {
  props: {
    id: String,
  },
  components: {
    RestaurantImage,
    RestaurantHeader,
    RestaurantBar,
  },
  data() {
    return {
      ...this.$store.getters['restaurants/getRestaurantById'](
        parseInt(this.id, 10),
      ),
    };
  },
};
</script>
