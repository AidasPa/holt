<template>
  <span class="item" @click="handleItemClick">
    <d-row style="width: 100%;">
      <d-col :md="4">
        <!-- <img
          class="item__img"
          :src="image.url"
          alt=""
        /> -->
        <blur-hash-image
          class="item__img"
          :hash="image.blurhash"
          :src="image.url"
          :width="128"
          :height="72"
        />
      </d-col>
      <d-col>
        <h5 class="item-content__title">{{ title }}</h5>
        <p class="item-content__desc text-muted">{{ description }}</p>
        <p class="item-content__info text-muted mt-2">€€ · {{ address }}</p>
      </d-col>
    </d-row>
    <hr />
  </span>
</template>
<script>
export default {
  props: {
    title: String,
    description: String,
    image: Object,
    id: Number,
    address: String,
  },
  methods: {
    handleItemClick() {
      this.$emit('should-close');
      this.$router.push(`/restaurant/${this.id}`).catch(() => {});
    },
  },
};
</script>
<style lang="scss">
.item {
  cursor: pointer;
  &__img > span > img {
    width: 110%;
  }
  &-content {
    &__title {
      font-weight: 800;
    }
    &__desc {
      margin-bottom: 0 !important;
      line-height: 0.2rem;
    }
    &__info {
      margin-bottom: 0 !important;
      color: rgb(226, 226, 226);
      font-size: 13px;
    }
  }
}
</style>
