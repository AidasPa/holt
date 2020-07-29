<template>
  <d-modal @close="$emit('close')">
    <d-modal-header>
      <d-modal-title>Login</d-modal-title>
    </d-modal-header>
    <d-modal-body>
      <form>
        <d-row>
          <d-col :md="12">
            <label class="sr-only" for="f1_Email">Email</label>
            <d-input
              id="f1_Email"
              class="mb-2 mr-sm-2 mb-sm-0 w-100"
              placeholder="Email"
            />
          </d-col>
        </d-row>
        <d-row class="mt-2">
          <d-col :md="12">
            <label class="sr-only" for="f1_Password">Password</label>
            <d-input
              id="f1_Password"
              class="mb-2 mr-sm-2 mb-sm-0 w-100"
              placeholder="Password"
              type="password"
            />
          </d-col>
        </d-row>
        <d-row class="mt-2">
          <d-col>
            <d-button class="w-100" size="lg" theme="primary">Login</d-button>
          </d-col>
        </d-row>
      </form>
    </d-modal-body>
  </d-modal>
</template>

<script>
export default {
  props: {
    showModal: Boolean,
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
