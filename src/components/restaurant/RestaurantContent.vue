<template>
  <d-row class="restaurant-content__row">
    <d-col :md="2">
      <div class="">
        <h5 class="text-underline restaurant-content__category--active">
          Mesainiai
        </h5>
        <h5 class="text-underline restaurant-content__category">Mesainiai</h5>
        <h5 class="text-underline restaurant-content__category">Mesainiai</h5>
        <h5 class="text-underline restaurant-content__category">Mesainiai</h5>
        <h5 class="text-underline restaurant-content__category">Mesainiai</h5>
        <h5 class="text-underline restaurant-content__category">Mesainiai</h5>
      </div>
    </d-col>
    <d-col :md="7">
      <div class="">
        test
      </div>
    </d-col>
    <d-col :md="3">
      <div class="">
        test
      </div>
    </d-col>
    <div style="height: 800px;"></div>
  </d-row>
</template>
<script>
export default {};
</script>
<style lang="scss">
.restaurant-content {
  &__row {
    margin-top: 3.5rem;
  }
  &__category {
    color: grey;
    display: inline-block;
    &--active {
      color: black;
      text-decoration: underline;
    }
    &::after {
      content: '';
      display: block;
      width: 0;
      height: 2px;
      background: #000;
      transition: width 0.3s;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover {
      color: black;
      cursor: pointer;
    }
  }
}
</style>
