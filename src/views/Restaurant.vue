<template>
  <span>
    <restaurant-image :image="image" />
    <d-row class="holt-row mt-4">
      <d-col :md="7" :xs="12">
        l
      </d-col>
    </d-row>
  </span>
</template>
<script>
import RestaurantImage from '@/components/restaurant/RestaurantImage.vue';

export default {
  props: {
    id: String,
  },
  components: {
    RestaurantImage,
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
