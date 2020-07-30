<template>
  <d-row class="checkout__main-row">
    <d-col :md="7">
      <checkout-item
        v-for="{ description, title, image, price, quantity, id } in items"
        :key="id"
        :description="description"
        :image="image"
        :price="price"
        :quantity="quantity"
        :title="title"
      />
    </d-col>
    <d-col :md="5">
      <d-card>
        <d-card-body>
          Prices are in euro and include VAT
          <hr />
          <d-row>
            <d-col>
              <p class="checkout__check-key">Items total</p>
            </d-col>
            <d-col>
              <p class="checkout__check-value">€{{ formatTotalItemPrice }}</p>
            </d-col>
          </d-row>
          <hr />
          <d-row v-if="formatTotalItemPrice < 8">
            <d-col>
              <p class="checkout__check-key">Small order surcharge</p>
              <p class="checkout__check-key--description text-muted">
                Orders below €8.00 cost a little extra to deliver
              </p>
            </d-col>
            <d-col>
              <p class="checkout__check-value">€2.00</p>
            </d-col>
          </d-row>
          <hr />
          <d-row>
            <hr />
            <d-col>
              <p class="checkout__check-key">Delivery</p>
            </d-col>
            <d-col>
              <p class="checkout__check-value">€1.50</p>
            </d-col>
          </d-row>
          <hr />
          <d-row>
            <d-col>
              <p class="checkout__check-key--bold">
                Total
              </p>
            </d-col>
            <d-col>
              <p class="checkout__check-value--bold">€{{ formatTotalPrice }}</p>
            </d-col>
          </d-row>
        </d-card-body>
      </d-card>
    </d-col>
  </d-row>
</template>
<script>
import CheckoutItem from './CheckoutItem.vue';

export default {
  props: {
    restaurantId: Number,
  },
  mounted() {
    if (this.items.length < 1) {
      this.$router.push(`/restaurant/${this.restaurantId}`);
    }
    // console.log(this.items.length);
  },
  computed: {
    items() {
      return this.$store.getters['cart/getAddedItemsByRestaurantId'](
        this.restaurantId,
      );
    },
    formatTotalItemPrice() {
      const { items } = this;
      const reduced = items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0,
      );
      return reduced.toFixed(2);
    },
    formatTotalPrice() {
      let initialPrice = parseInt(this.formatTotalItemPrice, 10);
      if (initialPrice < 8) initialPrice += 2; // order fee
      initialPrice += 1.5; // delivery
      return initialPrice.toFixed(2);
    },
  },
  components: {
    CheckoutItem,
  },
};
</script>
<style lang="scss">
.checkout {
  &__check {
    &-key {
      color: #000;
      font-size: 18px;
      &--description {
        margin: 0;
      }
      &--bold {
        font-weight: bold;
        font-size: 20px;
        color: #000;
      }
    }
    &-value {
      color: #000;
      font-size: 18px;
      float: right;
      &--bold {
        font-weight: bold;
        font-size: 20px;
        color: #000;
        float: right;
      }
    }
  }
  &__main-row {
    margin-top: 150px;
  }
}
</style>
