<template>
  <div>
    <mexa-menubar :items="items">
      <template #start>
        <img
          alt="alt"
          src="http://caribbeandigitalgroup.com/CDG.svg"
          height="40"
          class="mr-2"
        />
      </template>
      <template #end>
        <mexa-search @search_data="search"></mexa-search>
      </template>
    </mexa-menubar>
    <mexa-sidebar :active="visibleSidebar" :items="navigation">
      <template #header>
        <mexa-avatar type="icon" title="pi pi-user" shape="" />
        <h3>Edsonfer</h3>
      </template>
      <template #options>
        <Button
          type="button"
          label="Profile"
          badge="8"
          icon="pi pi-users"
          class="p-button-success"
          @click="navigateTo"
        />
      </template>
      <template #footer>
        <mexa-avatar
          type="image"
          title="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"
          size="xlarge"
          shape="circle"
        />
        Mexa-UI
      </template>
    </mexa-sidebar>
    <Card>
      <template #content>
        <mexa-breadcrumb />
        <hr />
        <h1>Layout</h1>
        <pre>
          {{ data_filter }}
        </pre>
        <hr />
        <slot />
      </template>
    </Card>
  </div>
</template>
<script setup>
import MexaAvatar from "@/components/Avatars/MexaAvatar.vue";
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
        ],
      },
    ],
  },
]);

const items = ref([
  {
    label: "Menu",
    icon: "pi pi-table",
    command: () => {
      visibleSidebar.value = !visibleSidebar.value;
    },
  },
  {
    label: "External Link",
    icon: "pi pi-star",
    url: "https://vuejs.org/",
  },
  {
    label: "Users",
    icon: "pi pi-fw pi-user",
    items: [
      {
        label: "New",
        icon: "pi pi-fw pi-user-plus",
      },
      {
        label: "Delete",
        icon: "pi pi-fw pi-user-minus",
      },
      {
        label: "Search",
        icon: "pi pi-fw pi-users",
        items: [
          {
            label: "Filter",
            icon: "pi pi-fw pi-filter",
            items: [
              {
                label: "Print",
                icon: "pi pi-fw pi-print",
              },
            ],
          },
          {
            icon: "pi pi-fw pi-bars",
            label: "List",
          },
        ],
      },
    ],
  },
]);

import { useItemsStore } from "@/stores/items";
const myStore = useItemsStore();
console.log(myStore.items);

const data = computed({
  get() {
    return myStore.items;
  },
});

const data_filter = ref();
data_filter.value = data.value;
myStore.itemsFiltered = data_filter.value;
const search_input = ref("");

const search = (input) => {
  console.log("execute");
  console.log(input.value);
  // Cada page puede asignar datos al data store
  // Aqui vamos a estar realizando una busqueda de la data, que tenga el store
  search_input.value = input.value;
  if (search_input.value == "") {
    data_filter.value = data.value;
  } else {
    const list_filter = data.value.filter((element) => {
      return element.name
        .toLowerCase()
        .includes(search_input.value.toLowerCase());
    });
    data_filter.value = list_filter;
  }
  myStore.itemsFiltered = data_filter.value;
};

const navigateTo = () => {
  console.log("Test...");
};

onMounted(() => {
  console.log("Updated in layout...");
});

const greetingMessage = ref("Hola");
</script>
<style>
.p-card .p-card-content {
  padding: 0rem 0 !important;
}
</style>
