<template>
  <span>
    <d-row style="width: 100%;">
      <d-col :md="4">
        <img
          class="item__img"
          src="http://localhost:8000/storage/restaurant_images/CPY1QqKt75xaakn3NlVuYIzIVqOuU17Z5iN0cSox.jpeg"
          alt=""
        />
      </d-col>
      <d-col>
        <h5 class="item-content__title">Challenge</h5>
        <p class="item-content__desc text-muted">Various cruisinces</p>
        <p class="item-content__info text-muted mt-2">€€ - Vilniaus G - 8.4</p>
      </d-col>
    </d-row>
  <hr>
  </span>
</template>
<style lang="scss">
.item {
  &__img {
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
