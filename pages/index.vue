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

// Default use store
// import { useCounterStore } from "~~/stores/example";
// const store = useCounterStore();
// console.log(store.name);
// console.log(store.count);
// store.increment();
// console.log(store.count);
// console.log(store.doubleCount);

import { useItemsStore } from "@/stores/items";
const dataItems = useItemsStore();
dataItems.items = [{ name: "Edson" }, { name: "Allison" }, { name: "Pamela" }];
</script>
