<template>
  <span>
    <d-button
      size="sm"
      class="ml-1"
      outline
      v-for="index in pageCount"
      :key="index"
      @click="() => handlePageChange(index)"
      >{{ index }}</d-button
    >
  </span>
</template>
<script>
export default {
  props: {
    pageCount: Number,
  },
  methods: {
    handlePageChange(index) {
      this.$router.replace({
        query: { page: index },
      });
    },
  },
};
</script>
