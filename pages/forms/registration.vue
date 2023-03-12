<template lang="">
  <forms-mexa-registration v-bind="img"></forms-mexa-registration>
</template>
<script setup>
const img = ref({
  src: "/img/logo.png",
  alt: "Image",
  height: "50",
  class: "mb-3 w-2",
});
</script>
