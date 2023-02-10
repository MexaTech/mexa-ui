<template>
  <div>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat repudiandae
    asperiores adipisci dolor voluptatem ipsam ex saepe tenetur amet corrupti,
    ullam cum illo sapiente odio officiis voluptatibus placeat quibusdam dolore.
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
