<template>
  <span>
    <d-input
      :class="[
        'navbar-search__input',
        transparent && 'navbar-search__input--transparent',
      ]"
      size="sm"
      @input="handleSearchChange"
      :value="query"
      placeholder="Search..."
    />
    <div v-if="showSearchBox" class="navbar-search__container">
      <d-card class="navbar-search__card">
        <d-card-body>
          <navbar-search-item />
        </d-card-body>
      </d-card>
    </div>
  </span>
</template>
<script>
import NavbarSearchItem from './NavbarSearchItem.vue';

export default {
  props: {
    transparent: Boolean,
  },
  data() {
    return {
      showSearchBox: false,
      query: '',
    };
  },
  methods: {
    handleSearchChange(value) {
      if (value.length >= 3) {
        this.showSearchBox = true;
      }
      if (value.length < 3) this.showSearchBox = false;
      this.query = value;
    },
  },
  components: {
    NavbarSearchItem,
  },
};
</script>
<style lang="scss">
.navbar-search {
  &__card {
    position: absolute !important;
    margin-top: 25px;
    z-index: 999;
  }
  &__container {
    width: 500px;
  }
  &__input {
    width: 500px !important;
    &--transparent {
      background-color: transparent !important;
      border: 1.4px solid white !important;
      color: white !important;
      &::placeholder {
        color: white !important;
      }
    }
  }
}
</style>
