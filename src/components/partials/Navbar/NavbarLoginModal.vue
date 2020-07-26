<template>
  <d-modal v-if="showModalMutable" @close="handleClose">
    <d-modal-header>
      <d-modal-title>Header</d-modal-title>
    </d-modal-header>
    <d-modal-body>👋 Hello there!</d-modal-body>
  </d-modal>
</template>

<script>
export default {
  props: {
    showModal: Boolean,
  },
  updated() {
    console.log(this.showModalMutable);
  },
  data() {
    return {
      showModalMutable: this.showModal,
    };
  },
  methods: {
    handleClose() {
      this.$emit('modalClosed');
    },
  },
};
</script>
