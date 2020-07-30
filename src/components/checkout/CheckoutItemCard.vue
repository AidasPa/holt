<template>
  <d-card :class="['checkout__card']">
    <d-card-body class="checkout__card-body">
      <d-row>
        <d-col :md="1">
          <span class="a">{{ quantity }}</span>
        </d-col>
        <d-col>
          <h4 class="checkout__card-body-title">{{ title }}</h4>
          <div class="checkout__card-body-description__wrapper">
            <p class="text-muted">
              {{ description }}
            </p>
          </div>
          <span class="checkout__card-body-price">€{{ formatPrice }}</span>
        </d-col>
      </d-row>
    </d-card-body>
  </d-card>
</template>
<script>
export default {
  props: {
    id: Number,
    title: String,
    description: String,
    quantity: Number,
    price: Number,
  },
  computed: {
    formatPrice() {
      return (this.price * this.quantity).toFixed(2);
    },
  },
};
</script>
<style lang="scss">
.a {
  font-size: 35px;
  cursor: pointer;
  -webkit-user-select: none;
  color: #009de0;
}
.checkout {
  top: 150px;
  &__card {
    margin-top: -140px;
    top: 280px;
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
      &-quantity {
        font-size: 35px;
        cursor: pointer;
        -webkit-user-select: none;
        color: #009de0;
      }
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
    &:hover {
      box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.23);
    }
  }
}
</style>
