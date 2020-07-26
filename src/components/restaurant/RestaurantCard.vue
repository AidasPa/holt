<template>
  <d-col :md="4" :xs="12">
    <d-card>
      <d-card-img
        class="restaurant-card__img"
        src="https://prod-wolt-venue-images-cdn.wolt.com/s/carwYVISeKpjfkYNd4ImZSJL2cwwpK2SqRSAjruXpEA/5ef6049aa381bb84c1e5f4e4/ba548c0e-b866-11ea-a09d-8233c40c2e21_0d0419ceaa062ea84acdfff29742bbba.jpeg"
      />
      <d-card-body class="restaurant-card__body">
        <h5 class="restaurant-card__text-lead">Challenge</h5>
        <p class="text-muted">Lorem ipsum dolor sit amet.</p>
      </d-card-body>
      <d-card-footer class="restaurant-card__footer text-muted">
        €€ · 25 min · 😃 · hamburger, mexican, pasta
      </d-card-footer>
    </d-card>
  </d-col>
</template>

<script>
export default {};
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
