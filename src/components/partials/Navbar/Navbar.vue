<template>
  <span>
    <d-modal v-if="showLoginModal" @close="hideLoginModal">
      <d-modal-header>
        <d-modal-title>Header</d-modal-title>
      </d-modal-header>
      <d-modal-body>👋 Hello there!</d-modal-body>
    </d-modal>

    <d-navbar toggleable="md" class="navbar">
      <d-navbar-toggle target="nav-collapse"></d-navbar-toggle>
      <d-navbar-brand>
        <h6 class="my-auto mr-4">Holt</h6>
      </d-navbar-brand>

      <d-collapse is-nav id="nav-collapse">
        <d-navbar-nav class="ml-auto">
          <d-input-group seamless>
            <d-input-group-text slot="prepend">
              <fa class="text-black" :icon="['fas', 'search']" />
            </d-input-group-text>
            <d-input size="sm" placeholder="Search..." />
          </d-input-group>
        </d-navbar-nav>

        <d-navbar-nav class="ml-auto">
          <span @click="openLoginModal">
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
// import NavbarLoginModal from './NavbarLoginModal.vue';

export default {
  data() {
    return {
      showLoginModal: false,
    };
  },
  methods: {
    openLoginModal() {
      this.showLoginModal = true;
    },
    hideLoginModal() {
      this.showLoginModal = false;
    },
  },
  components: {
    // NavbarLoginModal,
  },
};
</script>

<style lang="scss">
.navbar {
  border-bottom: 1px solid lightgrey;
  padding-left: 400px !important;
  padding-right: 400px !important;
}
</style>
