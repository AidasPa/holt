<template>
  <span>
    <d-row class="holt-row mt-4">
      <d-col :md="7" :xs="12">
        <h4>{{ categoryTitle }}</h4>
        <hr />
        <d-row>
          <!-- <restaurant-card-loader v-for="index in 15" :key="index" :loading="getLoader" /> -->
          <restaurant-card
            v-for="{
              id,
              title,
              description,
              avg_delivery_time,
              categories,
              rating,
              image,
            } in items"
            :key="id"
            :title="title"
            :description="description"
            :avg-delivery-time="avg_delivery_time"
            :categories="categories"
            :rating="rating"
            :image="image"
            :id="id"
          />
        </d-row>
      </d-col>
    </d-row>
  </span>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

import api from '@/api/api';
import RestaurantCard from '@/components/common/RestaurantCard.vue';
// import RestaurantCardLoader from '@/components/common/RestaurantCardLoader.vue';

export default {
  props: {
    id: String,
  },
  data() {
    return {
      items: [],
      category: {},
    };
  },
  methods: mapActions('loader', ['setLoader']),
  mounted() {
    api.fetchRestaurantByCategory(
      (data) => {
        this.items = data.items;
        this.category = data.extended_data;

        this.setLoader(false);
      },
      () => {},
      this.id,
    );
  },
  computed: {
    categoryTitle() {
      const title = this.category?.title;
      return title?.charAt(0).toUpperCase() + title?.slice(1);
    },
    ...mapGetters('loader', ['getLoader']),
  },
  components: {
    RestaurantCard,
    // RestaurantCardLoader,
  },
};
</script>
