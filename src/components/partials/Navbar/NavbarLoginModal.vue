<template>
  <d-modal @close="$emit('close')">
    <d-modal-header>
      <d-modal-title>Login</d-modal-title>
    </d-modal-header>
    <d-modal-body>
      <p
        class="text-danger text-bold mt-1 mb-1"
        v-for="error in errors"
        :key="error"
      >
        {{ error }}
      </p>
      <form @submit.prevent="handleLogin">
        <d-row>
          <d-col :md="12">
            <label class="sr-only" for="f1_Email">Email</label>
            <d-input
              v-model="email"
              id="f1_Email"
              class="mb-2 mr-sm-2 mb-sm-0 w-100"
              type="email"
              placeholder="Email"
              required
            />
          </d-col>
        </d-row>
        <d-row class="mt-2">
          <d-col :md="12">
            <label class="sr-only" for="f1_Password">Password</label>
            <d-input
              v-model="password"
              id="f1_Password"
              class="mb-2 mr-sm-2 mb-sm-0 w-100"
              placeholder="Password"
              type="password"
              required
            />
          </d-col>
        </d-row>
        <d-row class="mt-2">
          <d-col>
            <d-button class="w-100 mt-4" theme="primary">Login</d-button>
          </d-col>
        </d-row>
      </form>
    </d-modal-body>
  </d-modal>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  props: {
    showModal: Boolean,
  },
  data() {
    return {
      email: '',
      password: '',
    };
  },
  computed: mapGetters('auth', {
    errors: 'getLoginErrors',
  }),
  methods: {
    handleLogin() {
      this.login({ email: this.email, password: this.password });
    },
    ...mapActions('auth', ['login']),
  },
};
</script>
<style lang="scss">
.login {
  &-input {
    width: 100%;
  }
}
</style>
