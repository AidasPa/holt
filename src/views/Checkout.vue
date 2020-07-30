<template>
  <span>
    <checkout-map />
    <d-row class="mt-5">
      <d-col :offset="1" :md="4">
        <h2 class="checkout__restaurant-title">Challenge</h2>
        <h4 class="checkout__restaurant-description">Various cruisines</h4>
      </d-col>
    </d-row>
    <d-row class="holt-row">
      <d-col :md="7" :xs="12">
        <d-row>
          <d-col :md="5">
            <d-col :md="12">
              <checkout-item-card
                v-for="({ title, description, quantity, price, id }, i) in items"
                :key="id"
                
                :quantity="quantity"
                :title="(title)"
                :id="id"
                :description="description"
                :price="price"
              />
            </d-col>
          </d-col>
          <d-col :md="5" :offset="7">
            <checkout-check :items="items" />
          </d-col>
        </d-row>
      </d-col>
    </d-row>
    <div style="height: 800px;"></div>
  </span>
</template>
<script>
import CheckoutMap from '@/components/checkout/CheckoutMap.vue';
import CheckoutItemCard from '@/components/checkout/CheckoutItemCard.vue';
import CheckoutCheck from '@/components/checkout/CheckoutCheck.vue';

export default {
  props: {
    id: String,
  },
  components: {
    CheckoutMap,
    CheckoutItemCard,
    CheckoutCheck,
  },
  computed: {
    items() {
      const items = this.$store.getters['cart/getAddedItemsByRestaurantId'](
        parseInt(this.id, 10),
      );
      console.log(items);
      return items;
    },
  },
};
</script>
