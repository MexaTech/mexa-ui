<template>
  <button
    class="p-button p-component p-button-icon-only p-inputnumber-button p-inputnumber-button-down p-button-text"
    type="button"
    tabindex="-1"
    aria-hidden="true"
  >
    <span class="pi pi-plus p-button-icon" v-if="type == 'plus'"></span>
    <span class="pi pi-minus p-button-icon" v-else></span>
    <span class="p-button-label">&nbsp;</span>
    <span
      class="p-ink btn-quantity"
      role="presentation"
      aria-hidden="true"
    ></span>
  </button>
</template>
<script setup>
const props = defineProps({
  type: {
    type: String,
    default: "plus",
  },
});
</script>
<style scoped>
.btn-quantity {
  height: 48px;
  width: 48px;
  top: 2.875px;
  left: 0.5px;
}
</style>
