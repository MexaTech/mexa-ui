<template>
  <div class="grid">
    <div class="col-4">
      <BlogsCardNews />
    </div>
    <div class="col-4">
      <BlogsCardNews :color="primary" />
    </div>
    <div class="col-4">
      <BlogsCardNews :color="green" />
    </div>
  </div>
</template>
<script setup>
const primary = ref(["#cc63f1", "#6366f1"]);
const green = ref(["#06d466", "#06b5d4"]);
</script>
