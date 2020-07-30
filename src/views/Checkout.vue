<template>
  <span>
    <restaurant-image :banner="restaurant.banner" />
    <d-row class="holt-row mt-4">
      <d-col :md="7" :xs="12">
        <h1 class="checkout__header-title">Challenge</h1>
        <h4 class="checkout__header-description">Various crusines</h4>
        <checkout-main-row
          v-if="'id' in restaurant"
          :restaurant-id="restaurant.id"
        />
      </d-col>
    </d-row>
  </span>
</template>
<script>
import RestaurantImage from '@/components/restaurant/RestaurantImage.vue';
import CheckoutMainRow from '@/components/checkout/CheckoutMainRow.vue';
import api from '@/api/api';

export default {
  props: {
    id: String,
  },
  mounted() {
    api.fetchRestaurant(
      (data) => {
        this.restaurant = data;
      },
      () => {},
      parseInt(this.id, 10),
    );
  },
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
