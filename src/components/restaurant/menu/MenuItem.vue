<template>
  <span>
    <d-card
      :class="['menu-item__card', isSelected || isSelectedInitial && 'menu-item__card--selected']"
    >
      <d-card-body class="menu-item__card-body">
        <d-row>
          <d-col :md="1">
            <span @click="handleAddItem" class="menu-item__plus">
              {{ isSelected || isSelectedInitial ? '-' : '+' }}
            </span>
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
    <d-card v-if="showOptions || isSelectedInitial">
      <d-card-body>
        <d-row>
          <d-col>
            <p class="menu-item__subcard-text">Quantity:</p>
          </d-col>
          <d-col>
            <d-button-group>
              <d-button @click="handleDecreaseItemCount">-</d-button>
              <d-input :value="itemCount" />
              <span @click="handleIncreaseItemCount">
                <d-button>+</d-button>
              </span>
            </d-button-group>
          </d-col>
        </d-row>
      </d-card-body>
    </d-card>
  </span>
</template>
<script>
import { mapActions } from 'vuex';

import MenuItemOptions from './MenuItemOptions.vue';

export default {
  props: {
    title: String,
    description: String,
    image: Object,
    price: Number,
    id: Number,
    restaurantId: Number,
  },
  data() {
    return {
      isSelected: false,
      showOptions: false,
    };
  },
  computed: {
    isSelectedInitial() {
      return (
        this.$store.getters['cart/getItemByIdAndRestaurantId']({
          item: this.id,
          restaurant: this.restaurantId,
        }) >= 0
      );
    },
    formatPrice() {
      return this.price.toFixed(2);
    },
    itemCount() {
      const count = this.$store.getters['cart/getAddedItemCountById'](this.id);
      return count ?? 0;
    },
  },
  methods: {
    handleIncreaseItemCount() {
      this.increaseItemQuantity({
        restaurant: this.restaurantId,
        item: this.id,
      });
    },
    handleDecreaseItemCount() {
      if (this.itemCount === 1) {
        this.isSelected = !this.isSelected;
        this.showOptions = !this.showOptions;
        this.removeItem({
          restaurant: this.restaurantId,
          item: this.id,
        });
      } else {
        this.decreaseItemQuantity({
          restaurant: this.restaurantId,
          item: this.id,
        });
      }
    },
    handleAddItem() {
      this.isSelected = !this.isSelected;
      this.showOptions = !this.showOptions;
      if (this.isSelected || this.isSelectedInitial) {
        this.addItem({
          restaurant: this.restaurantId,
          item: this.id,
        });
      } else {
        this.removeItem({
          restaurant: this.restaurantId,
          item: this.id,
        });
      }
    },
    ...mapActions('cart', {
      increaseItemQuantity: 'increaseItemQuantity',
      decreaseItemQuantity: 'decreaseItemQuantity',
      addItem: 'addItem',
      removeItem: 'removeItem',
    }),
  },
  component: {
    MenuItemOptions,
  },
};
</script>
<style lang="scss">
.menu-item {
  &__plus {
    font-size: 35px;
    cursor: pointer;
    -webkit-user-select: none;
  }
  &__subcard {
    &-text {
      margin: 0;
      line-height: 35px;
    }
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
