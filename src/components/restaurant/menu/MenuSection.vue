<template>
  <span>
    <d-row>
      <d-col :md="12">
        <h4>{{ title }}</h4>
        <menu-item
          v-for="{ title, description, image, price, id } in items"
          :key="id"
          :price="price"
          :id="id"
          :title="title"
          :image="image"
          :description="description"
          :restaurant-id="restaurantId"
        />
      </d-col>
    </d-row>
    <br />
  </span>
</template>
<script>

import MenuItem from './MenuItem.vue';

export default {
  props: {
    title: String,
    id: Number,
    restaurantId: Number,
  },
  components: {
    MenuItem,
  },
  methods: {

  },
  computed: {
    items() {
      return this.$store.getters['menu/getMenuItemsByCategoryId'](this.id);
    },
  },
};
</script>
