<template>
  <!-- eslint-disable max-len  -->
  <d-card class="restaurant-bar">
    <d-card-body class="restaurant-bar__card-body">
      <d-row>
        <h3 class="restaurant-bar__rating">
          🥴 {{ rating }}
          <span class="text-muted restaurant-bar__rating--total"
            >Out of 10</span
          >
        </h3>
        <d-button class="restaurant-bar__button mb-4" outline theme="light"
          >🧡 Favorite</d-button
        >
        <d-button class="float-right ml-auto mb-4" outline theme="light"
          >Search</d-button
        >
      </d-row>
    </d-card-body>
  </d-card>
</template>
<script>
export default {
  props: {
    rating: Number,
  },
};
</script>
<style lang="scss">
.restaurant-bar {
  margin-top: -70px;
  &__button {
    margin-left: 25px;
  }
  &__card-body {
    padding-bottom: 0.5rem !important;
  }
  &__rating {
    font-weight: 600;
    &--total {
      font-size: 12px;
    }
  }
}
</style>
