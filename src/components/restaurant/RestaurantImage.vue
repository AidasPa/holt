<template>
  <div class="bg-image" :style="{ backgroundImage: `url(https://prod-wolt-venue-images-cdn.wolt.com/5ecb7d72b222efcef7ecbd24/8971a0b2-ac91-11ea-8ed7-0a58647b105d_8.chocolaterie_menu_4.jpg)` }" />
</template>

<script>
export default {
  props: {
    image: String,
  },
};
</script>

<style lang="scss" scoped>
.bg-image {
  width: 100%;
  height: 700px;
  position: absolute;
  margin-top: -100px;
  z-index: -1;
  background-size: cover;
  filter: brightness(.7);
}
</style>
