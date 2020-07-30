<template>
  <span>
    <restaurant-image :banner="restaurant.banner" />
    <d-row class="holt-row mt-4">
      <d-col :md="7" :xs="12">
        <h1 class="checkout__header-title">{{ restaurant.title }}</h1>
        <h4 class="checkout__header-description">
          {{ restaurant.description }}
        </h4>
        <checkout-main-row
          v-if="'id' in restaurant"
          :restaurant-id="restaurant.id"
        />
      </d-col>
    </d-row>
    <div style="height: 800px;"></div>
  </span>
</template>
<script>
import RestaurantImage from '@/components/restaurant/RestaurantImage.vue';
import CheckoutMainRow from '@/components/checkout/CheckoutMainRow.vue';
import api from '@/api/api';
import { mapActions } from 'vuex';

export default {
  props: {
    id: String,
  },
  mounted() {
    this.setLoadder(true);
    api.fetchRestaurant(
      (data) => {
        this.restaurant = data;
        this.setLoadder(false);
      },
      () => {},
      parseInt(this.id, 10),
    );
  },
  methods: mapActions('laoder', ['setLoadder']),
  data() {
    return {
      restaurant: {
        banner: {},
      },
    };
  },
  components: {
    RestaurantImage,
    CheckoutMainRow,
  },
};
</script>
<style lang="scss">
.checkout {
  &__header {
    &-title {
      margin-top: 350px;
      font-size: 70px;
      color: #fff;
    }
    &-description {
      font-size: 24px;
      color: #fff;
    }
  }
}
</style>
