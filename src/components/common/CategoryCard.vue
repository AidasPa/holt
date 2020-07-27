<template>
  <d-col :md="3" class="mt-1">
    <d-img thumbnail :src="image"></d-img>
    <h5 class="category__text">{{ formatTitle }}</h5>
    <p class="text-muted category__count">{{ count }} restaurants</p>
  </d-col>
</template>

<script>
export default {
  props: {
    title: String,
    count: Number,
    image: String,
  },
  computed: {
    formatTitle() {
      return this.title.charAt(0).toUpperCase() + this.title.slice(1);
    },
  },
};
</script>

<style lang="scss">
.category {
  &__text {
    margin-top: 20px;
    font-weight: 500;
  }
  &__count {
    line-height: 4px;
    font-size: 15px;
  }
}
</style>
