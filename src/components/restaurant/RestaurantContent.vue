<template>
  <d-row class="restaurant-content__row">
    <d-col :md="2">
      <div class="mt-1">
        <h5
          class="text-underline restaurant-content__category"
          v-for="{ title, id } in categories"
          :key="id"
        >
          {{ title }}
        </h5>
      </div>
    </d-col>
    <d-col :md="7">
      <menu-section
        v-for="{ title, id } in categories"
        :key="id"
        :title="title"
        :id="id"
      />
    </d-col>
    <d-col :md="3">
      <restaurant-venue
        :phone-number="venue.phone_number"
        :address="venue.address"
      />
    </d-col>
    <div style="height: 800px;"></div>
  </d-row>
</template>
<script>
import { mapGetters } from 'vuex';

import MenuSection from './menu/MenuSection.vue';
import RestaurantVenue from './RestaurantVenue.vue';

export default {
  props: {
    venue: Object,
  },
  computed: mapGetters('menu', {
    categories: 'getMenuCategories',
  }),
  components: {
    MenuSection,
    RestaurantVenue,
  },
};
</script>
<style lang="scss">
.restaurant-content {
  &__row {
    margin-top: 3.5rem;
  }
  &__category {
    color: grey;
    display: inline-block;
    font-size: 1.05rem;
    width: 100%;
    &--active {
      color: black;
      text-decoration: underline;
    }
    &::after {
      content: '';
      display: block;
      width: 0;
      height: 2px;
      background: #000;
      transition: width 0.3s;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover {
      color: black;
      cursor: pointer;
    }
  }
}
</style>
