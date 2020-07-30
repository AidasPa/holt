<template>
  <span>
    <d-row class="holt-row mt-4">
      <d-col :md="7" :xs="12">
        <h4>
          {{ categoryTitle }}

          <paginator
            class="float-right"
            :page-count="pageCount"
            @page-changed="fetchRestaurantsByCategory"
          />
        </h4>
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
import Paginator from '@/components/common/Paginator.vue';

export default {
  props: {
    id: String,
  },
  data() {
    return {
      items: [],
      category: {},
      pageCount: 0,
    };
  },
  mounted() {
    // console.log();
    this.fetchRestaurantsByCategory(this.$route.query.page || null);
  },
  methods: {
    ...mapActions('loader', ['setLoader']),
    fetchRestaurantsByCategory(page = 1) {
      this.setLoader(true);
      api.fetchRestaurantByCategory(
        (data) => {
          this.items = data.items;
          this.category = data.extended_data;
          this.pageCount = data.total;

          this.setLoader(false);
        },
        () => {},
        { id: this.id, page },
      );
    },
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
    Paginator,
  },
};
</script>
