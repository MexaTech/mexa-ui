<template>
  <PanelMenu :model="menuItems" />
</template>
<script setup>
const props = defineProps({
  items: {
    type: Array,
    default: [
      {
        label: "Navigate",
        items: [
          {
            label: "Vue Website",
            icon: "pi pi-external-link",
            url: "https://vuejs.org/",
          },
        ],
      },
    ],
  },
});

const menuItems = props.items;
</script>
<style>
/* .p-panelmenu .p-panelmenu-content {
  border: none !important;
} */

.p-panelmenu .p-panelmenu-header .p-panelmenu-header-content {
  border: none !important;
  background: transparent !important;
}
</style>
