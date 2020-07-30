<template>
  <d-card
    @click="handleAddItem"
    :class="['menu-item__card', isSelected && 'menu-item__card--selected']"
  >
    <d-card-body class="menu-item__card-body">
      <d-row>
        <d-col :md="1">
          <span class="menu-item__plus">+</span>
        </d-col>
        <d-col>
          <h4 class="menu-item__card-body-title">{{ title }}</h4>
          <div class="menu-item__card-body-description__wrapper">
            <p class="text-muted">
              {{ description }}
            </p>
          </div>
          <span class="menu-item__card-body-price">€{{ formatPrice }}</span>
        </d-col>
        <d-col :md="5" style="padding-top: 20px;">
          <blur-hash-image
            width="600"
            height="337.5"
            class="menu-item__card-body-image"
            :hash="image.blurhash"
            :src="image.url"
          />
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
    image: Object,
    price: Number,
    id: Number,
  },
  data() {
    return {
      isSelected: false,
    };
  },
  computed: {
    formatPrice() {
      return this.price.toFixed(2);
    },
  },
  methods: {
    handleAddItem() {
      this.isSelected = !this.isSelected;
      console.log(this.id);
      this.$emit('item-clicked', this.id);
      // this.addItem({
      //   restaurant: 1,
      //   item: [
      //     {
      //       wow: 1,
      //     },
      //   ],
      // });
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
    border-bottom: 1px solid rgb(231, 231, 231);
    transition: 0.2s;
    cursor: pointer;
    &--selected {
      border-left: 4px solid #009de0;
    }
    &-body {
      padding: 0 1rem;
      padding-bottom: 1rem;
      &-title {
        line-height: 15px;
        font-size: 18px;
        font-weight: 600;
        color: #161616;
        padding-top: 20px;
      }
      &-description {
        &__wrapper {
          height: 50px;
          overflow: hidden;
        }
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
    }
  }
}
</style>
