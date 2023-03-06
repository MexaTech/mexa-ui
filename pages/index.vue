<template>
  <div>
    <mexa-title @mi-evento="handleEvento"></mexa-title>
  </div>
</template>
<script setup>
definePageMeta({
  layout: "default",
});

const data = ref([
  {
    id: 1,
    name: "Ana",
  },
  {
    id: 2,
    name: "Emilia",
  },
  {
    id: 3,
    name: "Ilse",
  },
]);

const handleEvento = () => {
  console.log("La función del slot ha sido ejecutada.");
};
</script>
