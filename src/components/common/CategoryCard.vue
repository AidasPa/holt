<template>
  <d-col :md="3" class="mt-1 category" >
    <d-img thumbnail :src="image"></d-img>
    <h5 @click="$router.push(`/categories/${id}`)" class="category__text">{{ formatTitle }}</h5>
    <p class="text-muted category__count">{{ count }} restaurants</p>
  </d-col>
</template>

<script>
export default {
  props: {
    title: String,
    count: Number,
    image: String,
    id: Number,
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
  cursor: pointer;
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
