<template lang="">
  <forms-mexa-signin v-bind="img"></forms-mexa-signin>
</template>
<script setup>
const img = ref({
  src: "/img/logo.png",
  alt: "Image",
  height: "50",
  class: "mb-3 w-2",
});
</script>
