<template>
  <div>
    <h5>Basic: {{ value1 }}</h5>
    <pre>{{ value2 }}</pre>
    <!-- <Slider v-model="value1" /> -->
  </div>
</template>

<script setup>
import { ref } from "vue";
const value1 = ref(null);
const value2 = ref({
  payload: "hola",
});
</script>

<style scoped>
.p-slider-horizontal,
.p-inputtext {
  width: 14rem;
}
.p-slider-vertical {
  height: 14rem;
}
</style>
