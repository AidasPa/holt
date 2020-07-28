<template>
  <span>
    <d-row>
      <d-col :md="12">
        <h4>{{ title }}</h4>
        <menu-item
          v-for="{ title, description, id } in items"
          :key="id"
          :title="title"
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
  data() {
    return {
      yeet: '???',
    };
  },
  computed: {
    items() {
      return this.$store.getters['menu/getMenuItemsByCategoryId'](this.id);
    },
  },
};
</script>
