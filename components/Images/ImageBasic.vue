<template>
  <div>
    <Image
      :src="src"
      :alt="alt"
      :width="width"
      :preview="preview"
      :imageClass="imageClass"
    />
  </div>
</template>
<script setup>
const props = defineProps({
  src: {
    type: String,
    default: "https://via.placeholder.com/300",
  },
  alt: {
    type: String,
    default: "Image",
  },
  width: {
    type: String,
    default: "250",
    required: true,
  },
  preview: {
    type: Boolean,
    default: false,
  },
  imageClass: {
    type: String,
    default: "",
  },
});
</script>
