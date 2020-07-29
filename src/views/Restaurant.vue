<template>
  <span>
    <restaurant-image :banner="restaurant.banner" />
    <d-row class="holt-row mt-4">
      <d-col :md="7" :xs="12">
        <restaurant-header
          :title="restaurant.title"
          :description="restaurant.description"
          :categories="restaurant.categories"
        />
        <restaurant-bar :rating="restaurant.rating" />
        <restaurant-content :venue="restaurant" />
      </d-col>
    </d-row>
  </span>
</template>
<script>
import { mapActions } from 'vuex';

import RestaurantImage from '@/components/restaurant/RestaurantImage.vue';
import RestaurantHeader from '@/components/restaurant/RestaurantHeader.vue';
import RestaurantBar from '@/components/restaurant/RestaurantBar.vue';
import RestaurantContent from '@/components/restaurant/RestaurantContent.vue';

import api from '@/api/api';

export default {
  props: {
    id: String,
  },
  components: {
    RestaurantImage,
    RestaurantHeader,
    RestaurantBar,
    RestaurantContent,
  },
  mounted() {
    this.setLoader(true);

    this.fetchRestaurantMenu(this.id);
    api.fetchRestaurant(
      (data) => {
        this.restaurant = data;
        this.setLoader(false);
      },
      () => {},
      this.id,
    );
  },
  data() {
    return {
      restaurant: {
        banner: {},
        title: '',
        description: '',
        categories: [],
      },
    };
  },
  methods: mapActions({
    setLoader: 'loader/setLoader',
    fetchRestaurantMenu: 'menu/fetchRestaurantMenu',
  }),
};
</script>
