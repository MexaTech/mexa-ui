<template>
  <div>
    <h1>Page</h1>
    <!-- <mexa-title /> -->
    <button @click="actualizar">Up</button>
    <pre>{{ dataItems.getItemsFiltered }}</pre>
  </div>
</template>
<script setup>
definePageMeta({
  layout: "default",
});

import { useItemsStore } from "@/stores/items";
const dataItems = useItemsStore();
dataItems.items = [{ name: "Edson" }, { name: "Allison" }, { name: "Pamela" }];
const mival = ref(false);
</script>
