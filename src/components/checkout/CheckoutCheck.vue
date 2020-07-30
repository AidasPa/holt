<template>
  <d-card>
    <d-card-body>
      <p class="checkout__paycard-disclaimer">
        Prices are in euro and include VAT
      </p>
      <hr />
      <d-row class="mt-4">
        <d-col>
          <p class="checkout__paycard-key">Items total</p>
        </d-col>
        <d-col>
          <p class="checkout__paycard-value">{{ addedItemsPrice }}</p>
        </d-col>
      </d-row>
      <!-- <d-row v-if="addedItemsPrice < 8" class="mt-4">
        <d-col>
          <p class="checkout__paycard-key">Small order surcharge</p>
          <p class="text-muted checkout__paycard-key__description">
            Orders below €8.00 cost a little extra to deliver
          </p>
        </d-col>
        <d-col>
          <p class="checkout__paycard-value">€2.00</p>
        </d-col>
      </d-row> -->
      <hr>
      <d-row class="mt-4">
        <d-col>
          <p class="checkout__paycard-key">Delivery</p>
        </d-col>
        <d-col>
          <p class="checkout__paycard-value">€1.50</p>
        </d-col>
      </d-row>
      <hr>
      <d-row class="mt-4">
        <d-col>
          <p class="checkout__paycard-key">Total</p>
        </d-col>
        <d-col>
          <p class="checkout__paycard-value">€ {{ totalPrice }}</p>
        </d-col>
      </d-row>
    </d-card-body>
  </d-card>
</template>
<script>
export default {
  props: {
    items: Array,
  },
  created() {
    if (this.items.length < 1) {
      this.$router.push('/');
    }
  },
  computed: {
    addedItemsPrice() {
      const reduced = this.items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0,
      );
      return reduced > 0 ? `€${reduced.toFixed(2)}` : '';
    },
    totalPrice() {
      const reduced = this.items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0,
      );
      let price = reduced;
      // if (price < 8) price += 2; // fee
      price += 1.5; // delivery fee

      return price.toFixed(2);
    },
  },
};
</script>
<style lang='scss'>
.checkout {
  &__paycard {
    &-disclaimer {
      font-size: 28px;
      color: #000 !important;
    }
    &-key {
      font-size: 18px;
      font-weight: bold;
      color: #000;
      &__description {
        font-size: 14px;
      }
    }
    &-value {
      color: #000;
      font-size: 18px;
      text-align: right;
    }
  }
  &__restaurant {
    &-title {
      font-size: 70px;
      margin-top: 400px;
      line-height: 4.5rem;
      margin-left: 250px;
      font-weight: bold;
    }
    &-description {
      margin-left: 250px;
    }
  }
}
</style>
