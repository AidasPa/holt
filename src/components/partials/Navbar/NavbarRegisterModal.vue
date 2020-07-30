<template>
  <d-modal @close="$emit('close')">
    <d-modal-header>
      <d-modal-title>Register</d-modal-title>
    </d-modal-header>
    <d-modal-body>
      <p
        class="text-danger text-bold mt-1 mb-1"
        v-for="error in errors"
        :key="error"
      >
        {{ error }}
      </p>
      <form @submit.prevent="handleRegister">
        <d-row>
          <d-col :md="12">
            <label class="sr-only" for="f1_Email">Name</label>
            <d-input
              v-model="name"
              id="f1_Email"
              class="mb-2 mr-sm-2 mb-sm-0 w-100"
              type="text"
              placeholder="Name"
              required
            />
          </d-col>
        </d-row>
        <d-row class="mt-2">
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
          <d-col :md="12">
            <label class="sr-only" for="f1_Password">Password Confirmation</label>
            <d-input
              v-model="password_confirmation"
              id="f1_Password"
              class="mb-2 mr-sm-2 mb-sm-0 w-100"
              placeholder="Password Confirmation"
              type="password"
              required
            />
          </d-col>
        </d-row>
        <d-row class="mt-2">
          <d-col>
            <d-button class="w-100 mt-4" theme="primary">Register</d-button>
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
      name: '',
      password_confirmation: '',
    };
  },
  computed: mapGetters('auth', {
    errors: 'getRegisterErrors',
  }),
  methods: {
    handleRegister() {
      this.register({
        email: this.email,
        password: this.password,
        name: this.name,
        password_confirmation: this.password_confirmation,
      });
    },
    ...mapActions('auth', ['register']),
  },
};
</script>
<style lang="scss">
.register {
  &-input {
    width: 100%;
  }
}
</style>
