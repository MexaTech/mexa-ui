<template>
  <div class="content-title">
    <h1 class="title">{{ title }}</h1>
    <button @click="$emit('mi-evento')">Emitir evento</button>
  </div>
</template>
<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "Title",
  },
});
</script>
<style scoped>
.content-title {
  margin-top: 1rem !important;
  margin-bottom: 1rem !important;
}

.title {
  font-size: 3.5rem;
  line-height: 1 !important;
  font-weight: 600 !important;
  color: #111827 !important;
}
</style>
