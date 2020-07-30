<template>
  <span>
    <d-row class="holt-row mt-4">
      <d-col :md="7" :xs="12">
        <h4>Sushi in Kaunas</h4>
        <hr>
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
      </d-col>
    </d-row>
  </span>
</template>
<script>
import api from '@/api/api';
import RestaurantCard from '@/components/common/RestaurantCard.vue';
import { mapActions } from 'vuex';

export default {
  props: {
    id: String,
  },
  data() {
    return {
      items: [],
    };
  },
  methods: mapActions('loader', ['setLoader']),
  mounted() {
    api.fetchRestaurantByCategory(
      (data) => {
        this.items = data.items;
        this.setLoader(false);
      },
      () => {},
      this.id,
    );
  },
  components: {
    RestaurantCard,
  },
};
</script>
