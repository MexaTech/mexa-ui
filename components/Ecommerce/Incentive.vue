<template>
  <div
    :class="`p-3 flex align-items-center ${background}`"
    style="border-radius: 50px"
  >
    <slot name="icon">
      <MexaIcon />
    </slot>
    <slot name="title">
      <span class="text-blue-900 text-lg font-medium">Free Shipping</span>
    </slot>
  </div>
</template>
<script setup>
const props = defineProps({
  background: {
    type: String,
    default: "bg-blue-100",
  },
});
</script>
