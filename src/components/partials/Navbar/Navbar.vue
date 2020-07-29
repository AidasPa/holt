<template>
  <span>
    <navbar-login-modal v-if="showLoginModal" @close="showLoginModal = false" />

    <d-navbar
      toggleable="md"
      :class="[
        'navbar',
        isRestaurantPage && [...'navbar--transparent', ' navbar-dark'],
      ]"
    >
      <d-navbar-toggle target="nav-collapse"></d-navbar-toggle>
      <d-navbar-brand>
        <img
          @click="$router.push('/')"
          :src="require('@/assets/img/logo.png')"
          :class="[isRestaurantPage && 'navbar__img-white']"
          width="80px"
        />
      </d-navbar-brand>

      <d-collapse is-nav id="nav-collapse">
        <d-navbar-nav class="ml-auto">
          <d-input-group seamless :class="[]">
            <d-input-group-text slot="prepend">
              <fa class="text-black" :icon="['fas', 'search']" />
            </d-input-group-text>
            <navbar-search :transparent="isRestaurantPage"/>
          </d-input-group>
        </d-navbar-nav>

        <d-navbar-nav class="ml-auto">
          <span @click="showLoginModal = true">
            <d-nav-item href="#">Login</d-nav-item>
          </span>
          <d-nav-item href="#">Register</d-nav-item>
          <d-dropdown text="Language" is-nav>
            <d-dropdown-item>Action</d-dropdown-item>
            <d-dropdown-item>Another action</d-dropdown-item>
            <d-dropdown-item>Something else here</d-dropdown-item>
            <d-dropdown-divider />
            <d-dropdown-item>Separated link</d-dropdown-item>
          </d-dropdown>
        </d-navbar-nav>
      </d-collapse>
    </d-navbar>
  </span>
</template>

<script>
import NavbarLoginModal from './NavbarLoginModal.vue';
import NavbarSearch from './NavbarSearch.vue';

export default {
  data() {
    return {
      showLoginModal: false,
    };
  },
  computed: {
    isRestaurantPage() {
      return this.$route.name === 'Restaurant';
    },
  },
  components: {
    NavbarLoginModal,
    NavbarSearch,
  },
};
</script>

<style lang="scss">
.navbar {
  border-bottom: 1px solid lightgrey;
  padding-left: 400px !important;
  padding-right: 400px !important;
  &--transparent {
    background-color: transparent;
    border-bottom: none !important;
  }
  &__img-white {
    filter: invert(1);
  }
}

</style>
