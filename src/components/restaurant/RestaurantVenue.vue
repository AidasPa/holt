<template>
  <span>
    <h5 class="venue-text">Venue information</h5>
    <h5 class="venue-text venue-text--address mt-4">Address</h5>
    <div class="mt-1">
      <p>
        {{ address }}
        <br />
        <span class="text-muted">LT {{ postalCode }} Kaunas </span>
      </p>
    </div>
    <hr />
    <div class="mt-4">
      <p>
        If you have allergies or other dietary restrictions, please contact the
        restaurant. The restaurant will provide food-specific information upon
        request.
        <br />
        <span class="venue-text--phone">{{ phoneNumber }}</span>
      </p>
    </div>
  </span>
</template>
<script>
export default {
  props: {
    phoneNumber: String,
    address: String,
  },
  computed: {
    postalCode() {
      return Math.round(Math.random() * 100000);
    },
  },
};
</script>
<style lang="scss">
.venue {
  &-text {
    font-weight: 800;
    width: 100%;
    &--address {
      font-size: 18px;
      color: black;
    }
    &--phone {
      color: #009de0;
    }
  }
}
</style>
