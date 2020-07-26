<template>
  <d-card class="hero-card">
    <d-card-body class="hero-card__body">
      <d-row>
        <d-col :md="8">
          <d-img
            src="https://prod-wolt-venue-images-cdn.wolt.com/s/m5-Bhg6feeAPxk0bu_RZL6UtbtrDl63o1KyfPP94NX4/5e85bb68489a126d2a5a4501/315a8a4a-7a61-11ea-8592-0a5864649a2f_livin_bendra.jpg"
            fluid
          />
        </d-col>
        <d-col>
          <d-row></d-row>
          <d-row class="hero-card__content">
            <h6 class="text-muted hero-card__content-item">ARTICLE</h6>
            <h3 class="hero-card__content-item">LIVIN</h3>
            <h6>For healthy lifestyle</h6>
          </d-row>
        </d-col>
      </d-row>
    </d-card-body>
  </d-card>
</template>

<script>
export default {};
</script>

<style lang="scss">
.hero-card {
  width: 100%;
  &__body {
    padding: 0 !important;
  }
  &__content {
    height: 100%;
    align-content: center;
    &-item {
      line-height: 1.2rem !important;
      width: 100%;
    }
  }
}
</style>
