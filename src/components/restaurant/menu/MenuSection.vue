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
          @item-clicked="handleAddItem"
        />
      </d-col>
    </d-row>
    <br />
  </span>
</template>
<script>
import { mapActions } from 'vuex';

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
    ...mapActions('cart', {
      addItem: 'addItem',
    }),
    handleAddItem(item) {
      console.log(item, this.restaurantId);
      this.addItem({
        restaurant: 2,
        item: 1,
      });
    },
  },
  computed: {
    items() {
      return this.$store.getters['menu/getMenuItemsByCategoryId'](this.id);
    },
  },
};
</script>
