<template>
  <d-col :md="4" :xs="12">
    <d-card @click="$router.push('restaurant/' + id)">
      <blur-hash-image
        class="card-img-top"
        width="590"
        height="332"
        :hash="image.blurhash"
        :src="image.url"
        alt="green lawn grass during daytime"
      />
      <d-card-body class="restaurant-card__body">
        <h5 class="restaurant-card__text-lead">{{ formatTitle }}</h5>
        <p class="text-muted">{{ formatDescription }}</p>
      </d-card-body>
      <d-card-footer class="restaurant-card__footer text-muted">
        €€ · {{ averageDeliveryTime }} min · 😃 {{ rating }} ·
        {{ formatCategories }}
      </d-card-footer>
    </d-card>
  </d-col>
</template>

<script>
export default {
  props: {
    id: Number,
    title: String,
    description: String,
    rating: Number,
    categories: Array,
    averageDeliveryTime: Number,
    image: Object,
  },
  computed: {
    formatCategories() {
      return this.categories.join(', ');
    },
    formatDescription() {
      if (this.description.length > 39) {
        return `${this.description
          .split('')
          .splice(0, 36)
          .join('')}...`;
      }
      return this.description;
    },
    formatTitle() {
      const rx = /(.*) (\(.*\))/;
      const match = this.title.match(rx);

      return rx.test(this.title) ? match[1] : this.title;
    },
  },
};
</script>

<style lang="scss">
.header-title {
  font-weight: 800;
}
.restaurant-card {
  &__img {
    width: 100%;
  }
  &__body {
    padding-bottom: 16px !important;
    padding-left: 16px !important;
  }
  &__footer {
    background-color: white !important;
    border-top: 1px dashed lightgrey !important;
    padding: 8px 16px !important;
    font-size: 14px;
  }
  &__text {
    &-lead {
      line-height: 0.5rem;
      font-weight: 500;
    }
  }
}
</style>
