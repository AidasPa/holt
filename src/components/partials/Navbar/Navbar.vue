<template>
  <span>
    <navbar-login-modal v-if="showLoginModal" @close="toggleLoginModal" />

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
          :class="['navbar__img', isRestaurantPage && 'navbar__img--white']"
          width="80px"
        />
      </d-navbar-brand>

      <d-collapse is-nav id="nav-collapse">
        <d-navbar-nav class="ml-auto">
          <d-input-group seamless :class="[]">
            <navbar-search :transparent="isRestaurantPage" />
          </d-input-group>
        </d-navbar-nav>

        <d-navbar-nav class="ml-auto">
          <template v-if="!loggedIn">
            <span @click="toggleLoginModal">
              <d-nav-item
                :class="[isRestaurantPage && 'navbar--transparent__item']"
                href="#"
                >Login</d-nav-item
              >
            </span>
            <d-nav-item
              href="#"
              :class="[isRestaurantPage && 'navbar--transparent__item']"
              >Register</d-nav-item
            >
          </template>
          <d-dropdown v-else :text="user.name" is-nav>
            <d-dropdown-item>Cart</d-dropdown-item>
            <d-dropdown-divider />
            <span @click="logout">
              <d-dropdown-item>Logout</d-dropdown-item>
            </span>
          </d-dropdown>
        </d-navbar-nav>
      </d-collapse>
    </d-navbar>
  </span>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import NavbarLoginModal from './NavbarLoginModal.vue';
import NavbarSearch from './NavbarSearch.vue';

export default {
  computed: {
    isRestaurantPage() {
      return this.$route.name === 'Restaurant';
    },
    ...mapGetters('auth', {
      loggedIn: 'getIsLoggedIn',
      user: 'getUser',
      showLoginModal: 'getLoginModal',
    }),
  },
  methods: mapActions('auth', ['toggleLoginModal', 'logout']),
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
  padding-top: 0px !important;
  margin-top: 20px;
  &--transparent {
    background-color: transparent;
    border-bottom: none !important;
    &__item > a {
      color: white !important;
    }
  }
  &__img {
    cursor: pointer;
    &--white {
      filter: invert(1);
    }
  }
}
</style>
