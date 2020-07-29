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
    <div
      v-if="showSearchBox"
      v-click-outside="handleClickOutsideSearchBox"
      class="navbar-search__container"
    >
      <d-card class="navbar-search__card">
        <d-card-body v-if="results.length > 0">
          <navbar-search-item
            @should-close="handleShouldClose"
            v-for="{ id, description, title, image, address } in results"
            :key="id"
            :description="description"
            :title="title"
            :image="image"
            :address="address"
            :id="id"
          />
        </d-card-body>
        <d-card-body v-else>
          <p>No results found :(</p>
        </d-card-body>
      </d-card>
    </div>
  </span>
</template>
<script>
import api from '@/api/api';
import NavbarSearchItem from './NavbarSearchItem.vue';

export default {
  props: {
    transparent: Boolean,
  },
  data() {
    return {
      showSearchBox: false,
      query: '',
      results: [],
    };
  },
  methods: {
    handleShouldClose() {
      this.showSearchBox = false;
      this.query = '';
    },
    handleClickOutsideSearchBox() {
      if (this.showSearchBox) this.showSearchBox = false;
    },
    fetchResults(query) {
      api.fetchSearchResults(
        (data) => {
          this.results = data;
        },
        () => {},
        query,
      );
    },
    handleSearchChange(value) {
      if (value.length >= 3) {
        this.fetchResults(value);
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
    width: 500px;
  }
  // &__container {
  // }
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
