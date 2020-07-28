<template>
  <d-card class="menu-item__card">
    <d-card-body class="menu-item__card-body">
      <d-row>
        <d-col :md="1">
          <span class="menu-item__plus">+</span>
        </d-col>
        <d-col>
          <h4 class="menu-item__card-title">{{ title }}</h4>
          <p class="text-muted">
            {{ formatDescription }}
            <br />
            <span class="menu-item__card-price">€2.00</span>
          </p>
        </d-col>
        <d-col :md="5" style="padding-top: 20px;">
          <blur-hash-image
            width="600"
            height="337.5"
            class="menu-item__card-image"
            :hash="image.blurhash"
            :src="image.url"
            alt="green lawn grass during daytime"
          />
        </d-col>
      </d-row>
    </d-card-body>
  </d-card>
</template>
<script>
/* eslint-disable indent */

export default {
  props: {
    title: String,
    description: String,
    image: Object,
  },
  computed: {
    formatDescription() {
      return this.description.length > 80
        ? `${this.description
            .split('')
            .splice(0, 80)
            .join('')}...`
        : this.description;
    },
  },
};
</script>
<style lang="scss">
.menu-item {
  &__plus {
    font-size: 35px;
    cursor: pointer;
  }

  &__card {
    box-shadow: none;
    border-radius: 0 !important;
    transition: 0.3s;
    border-top: 1px solid rgb(231, 231, 231);
    &-title {
      line-height: 15px;
      font-size: 18px;
      font-weight: 600;
      color: #161616;
      padding-top: 20px;
    }
    &-price {
      color: #009de0;
      margin-bottom: 0 !important;
    }
    &-image > span > img {
      border-radius: 10px;
    }
    &:hover {
      box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.23);
    }
    &-body {
      padding: 0 1rem;
      padding-bottom: 0.5rem;
    }
  }
}
</style>
