<template>
  <div
    :class="`${bg} inline-flex align-items-center justify-content-center mr-3 h-3rem w-3rem border-circle`"
  >
    <slot name="content">
      <i class="pi pi-shopping-bag text-white text-2xl"></i>
    </slot>
  </div>
</template>
<script setup>
const props = defineProps({
  bg: {
    type: String,
    default: "bg-blue-500",
  },
});
</script>
