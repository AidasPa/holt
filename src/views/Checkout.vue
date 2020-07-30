<template>
  <span>
    <restaurant-image :banner="restaurant.banner" />
    <d-row class="holt-row mt-4">
      <d-col :md="7" :xs="12">
        <h1 class="checkout__header-title">Challenge</h1>
        <h4 class="checkout__header-description">Various crusines</h4>
        <d-row class="checkout__main-row">
          <d-col :md="8">
            <d-card>
              <d-card-body>tes</d-card-body>
            </d-card>
          </d-col>
          <d-col :md="4">
            <d-card>
              <d-card-body>tea</d-card-body>
            </d-card>
          </d-col>
        </d-row>
      </d-col>
    </d-row>
  </span>
</template>
<script>
import RestaurantImage from '@/components/restaurant/RestaurantImage.vue';
import api from '@/api/api';
// import { mapActions } from 'vuex';

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
  // methofd: mapActions('restaurant', 'fetchRestaurant'),
  data() {
    return {
      restaurant: {
        banner: {},
      },
    };
  },
  components: {
    RestaurantImage,
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
  &__main-row {
    margin-top: 250px;
  }
}
</style>
