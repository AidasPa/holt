<template>
  <span>
    <d-row>
      <d-col :md="12">
        <h4>{{ title }}</h4>
        <menu-item
          v-for="{ title, description, image, id } in items"
          :key="id"
          :title="title"
          :image="image"
          :description="description"
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
  },
  components: {
    MenuItem,
  },
  computed: {
    items() {
      return this.$store.getters['menu/getMenuItemsByCategoryId'](this.id);
    },
  },
};
</script>
