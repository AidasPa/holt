<template>
  <d-row class="restaurant-header__content">
    <h1 class="text-white restaurant-title">
      Chocolaterie CH (Rotušės a.)
    </h1>
    <h4 class="text-white">Chocolate dream for the whole family</h4>
    <h2 class="text-white restaurant-header__currency">€€</h2>
    <div class="restaurant-header-category">PANCAKES</div>
    <div class="restaurant-header-category">PANCAKES</div>
    <div class="restaurant-header-category">PANCAKES</div>
  </d-row>
</template>

<style lang="scss">
.restaurant-title {
  font-size: 5.5rem;
  font-weight: 600;
  line-height: 7rem;
}
.restaurant-header {
  &__content {
    height: 600px;
    display: flex;
    align-content: center;
  }
  &__currency {
    line-height: 2.5;
    width: 100%;
  }
  &-category {
    background: #202125;
    padding: 0.5rem 1rem;
    font-size: 12px;
    margin-left: 10px;
    color: white;
    border-radius: 5px;
  }
}
</style>
