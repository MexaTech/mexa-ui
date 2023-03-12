<template>
  <Breadcrumb :home="home" :model="items" aria-label="breadcrumb" />
</template>
<script setup>
const home = ref({
  icon: "pi pi-home",
  to: "/",
});
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
