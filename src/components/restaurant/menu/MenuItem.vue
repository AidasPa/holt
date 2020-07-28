<template>
  <d-card class="menu-item__card">
    <d-card-body>
      <d-row>
        <d-col :md="2">
          <span class="menu-item__plus">{{ title }}</span>
        </d-col>
      </d-row>
    </d-card-body>
  </d-card>
</template>
<script>
export default {
  props: {
    title: String,
    description: String,
  },
};
</script>
<style lang="scss">
.menu-item {
  &__card {
    box-shadow: none;
    border-radius: 0 !important;
    transition: 0.3s;
    border-top: 1px solid rgb(231, 231, 231);
    &:hover {
      box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.23);
    }
  }
}
</style>
