<template>
  <Breadcrumb :home="home" :model="items" aria-label="breadcrumb" />
</template>
<script setup>
import { ref, reactive, computed, watch } from "vue";
const home = ref({
  icon: "pi pi-home",
  to: "/",
});
import { useRouter, useRoute } from "vue-router";
const routes = useRoute();
const items = ref([]);
const path = routes.path.split("/");
const to = ref("");
for (let i in path) {
  if (path[i] != "") {
    to.value += `/${path[i]}`;
    items.value.push({
      label: `${path[i][0].toUpperCase()}${path[i].substring(1)}`,
      to: to.value,
    });
  }
}
</script>
<style scoped>
.p-breadcrumb {
  border: none !important;
}
</style>
