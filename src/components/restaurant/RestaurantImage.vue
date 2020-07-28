<template>
  <div class="bg-image">
    <blur-hash-image
      width="1920"
      height="720"
      class="bg-image__img"
      :hash="banner.blurhash"
      :src="banner.url"
      alt="green lawn grass during daytime"
    />
  </div>
</template>

<script>
export default {
  props: {
    banner: Object,
  },
};
</script>

<style lang="scss">
.bg-image {
  width: 100%;
  height: 700px;
  position: absolute;
  margin-top: -100px;
  z-index: -1;
  filter: brightness(0.7);
  &__img > span > img {
    object-fit: cover;
  }
}

</style>
