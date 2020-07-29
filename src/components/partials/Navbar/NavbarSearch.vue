<template>
  <d-input
    :class="[transparent && 'navbar-transparent-search__input']"
    size="sm"
    placeholder="Search..."
  />
</template>
<script>
export default {
  props: {
    transparent: Boolean,
  },
};
</script>
<style lang="scss">
.navbar-transparent-search {
  &__input {
    background-color: transparent !important;
    border: 1.4px solid white !important;
    color: white !important;
    &::placeholder {
      color: white !important;
    }
  }
}
</style>
