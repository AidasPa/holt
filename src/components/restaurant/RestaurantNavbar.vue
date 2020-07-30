<template>
  <d-row
    :class="[
      'holt-row restaurant-navbar',
      shouldBeFixed && 'restaurant-navbar--fixed',
    ]"
  >
    <d-col :offset="0">
      <p class="text-white restaurant-navbar__delivery-time">
        <i class="fas fa-bicycle"></i>
        The average delivery time is
        <b class="restaurant-navbar__delivery-time-minutes">25 min</b>
      </p>
    </d-col>
    <div class="float-right">
      <d-button class="restaurant-navbar__cart">
        <i class="fas fa-shopping-bag fa-fw"></i>
        <span class="ml-2">€2.00 Checkout</span>
      </d-button>
    </div>
  </d-row>
</template>
<script>
export default {
  data() {
    return {
      shouldBeFixed: false,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll');
  },
  methods: {
    handleScroll() {
      this.shouldBeFixed = window.scrollY >= 75;
    },
  },
};
</script>
<style lang="scss">
.restaurant-navbar {
  // position: fixed;
  padding-left: 400px;
  padding-right: 380px;
  width: 100%;
  // margin-top: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  transition: 1s;
  margin: 0;
  &--fixed {
    z-index: 999;
    position: fixed;
    margin-top: -80px !important;
    background: #fff;
    & > div p {
      color: #000 !important;
    }
  }
  &__cart {
    // font-size: 18px;
    font-weight: bold;
    margin: 0;
  }
  &__delivery-time {
    font-size: 18px;
    margin: 0;
    line-height: 40px;
    &-minutes {
      font-weight: bold;
    }
  }
}
</style>
