<template>
  <div>
    <Button
      icon="pi pi-arrow-right"
      @click="visibleSidebar = !visibleSidebar"
      class="mr-2"
    />
    <mexa-sidebar :active="visibleSidebar" :items="navigation" />
  </div>
</template>
<script setup>
const visibleSidebar = ref(false);
const navigation = ref([
  {
    key: "1",
    label: "Vue Website",
    icon: "pi pi-external-link",
    url: "https://vuejs.org/",
  },
  {
    key: "2",
    label: "Users",
    icon: "pi pi-fw pi-user",
    items: [
      {
        key: "2_0",
        label: "New",
        icon: "pi pi-fw pi-user-plus",
      },
      {
        key: "2_1",
        label: "Delete",
        icon: "pi pi-fw pi-user-minus",
      },
      {
        key: "2_2",
        label: "Search",
        icon: "pi pi-fw pi-users",
        items: [
          {
            key: "2_2_0",
            label: "Filter",
            icon: "pi pi-fw pi-filter",
            items: [
              {
                key: "2_2_0_0",
                label: "Print",
                icon: "pi pi-fw pi-print",
              },
            ],
          },
          {
            key: "2_2_1",
            icon: "pi pi-fw pi-bars",
            label: "List",
          },
        ],
      },
    ],
  },
]);
</script>
