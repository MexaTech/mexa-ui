<template>
  <div>
    <image-basic v-bind="properties" />
  </div>
</template>
<script setup>
import ImageBasic from "~~/components/Images/ImageBasic.vue";
const properties = ref({
  src: "https://via.placeholder.com/150",
  alt: "Image example",
  width: "250",
  preview: true,
  imageClass: "",
});
</script>
