<template>
  <d-row class="restaurant-header__content">
    <h1 class="text-white restaurant-title">
      {{ title }}
    </h1>
    <h4 class="text-white">{{ description }}</h4>
    <h2 class="text-white restaurant-header__currency">€€</h2>
    <div
      class="restaurant-header-category"
      v-for="category in categories"
      :key="category"
    >
      {{ category }}
    </div>
  </d-row>
</template>
<script>
export default {
  props: {
    categories: Array,
    description: String,
    title: String,
  },
};
</script>
<style lang="scss">
.restaurant-title {
  font-size: 5.5rem;
  font-weight: 600;
  line-height: 7rem;
  width: 100%;
}
.restaurant-header {
  &__content {
    height: 600px;
    display: flex;
    align-content: center;
  }
  &__currency {
    line-height: 1.2;
    width: 100%;
  }
  &-category {
    background: #202125;
    padding: 0.5rem 1rem;
    font-size: 12px;
    margin-left: 10px;
    color: white;
    border-radius: 5px;
    text-transform: uppercase;
  }
  &-category:hover {
    cursor: pointer;
    background: #32343a;
  }
}
</style>
