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
        <!-- <mexa-avatar
          type="image"
          title="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"
          size="xlarge"
          shape="circle"
        />
        Mexa-UI -->
        &nbsp;
      </template>
    </mexa-sidebar>
    <Card>
      <template #content>
        <mexa-breadcrumb />
        <slot />
      </template>
    </Card>
  </div>
</template>
<script setup>
import { useItemsStore } from "@/stores/items";
import MexaAvatar from "@/components/Avatars/MexaAvatar.vue";
const visibleSidebar = ref(false);
const navigation = ref([
  {
    key: "1",
    label: "Avatar",
    icon: "pi pi-circle-fill",
    url: "/avatars",
  },
  {
    key: "2",
    label: "Footers",
    icon: "pi pi-circle-fill",
    url: "/footers",
  },
  {
    key: "3",
    label: "Forms",
    icon: "pi pi-circle-fill",
    items: [
      {
        key: "3_0",
        label: "Profile",
        icon: "pi pi-fw pi-circle-fill",
        url: "/forms/profile",
      },
      {
        key: "3_1",
        label: "Registration",
        icon: "pi pi-fw pi-circle-fill",
        url: "/forms/registration",
      },
      {
        key: "3_2",
        label: "Resetpass",
        icon: "pi pi-fw pi-circle-fill",
        url: "/forms/resetpass",
      },
      {
        key: "3_3",
        label: "Signin",
        icon: "pi pi-fw pi-circle-fill",
        url: "/forms/signin",
      },
    ],
  },
  {
    key: "4",
    label: "Headers",
    icon: "pi pi-circle-fill",
    url: "/headers",
  },
  {
    key: "4",
    label: "Images",
    icon: "pi pi-circle-fill",
    url: "/images",
  },
  {
    key: "5",
    label: "Menus",
    icon: "pi pi-circle-fill",
    items: [
      {
        key: "5_0",
        label: "Menubar",
        icon: "pi pi-fw pi-circle-fill",
        url: "/menus/menubar",
      },
      {
        key: "5_1",
        label: "Panel Menu",
        icon: "pi pi-fw pi-circle-fill",
        url: "/menus/panel-menu",
      },
    ],
  },
  {
    key: "6",
    label: "Stats",
    icon: "pi pi-circle-fill",
    url: "/stats",
  },
  {
    key: "7",
    label: "Toast",
    icon: "pi pi-circle-fill",
    url: "/toast",
  },
  {
    key: "8",
    label: "Slider",
    icon: "pi pi-circle-fill",
    url: "/slider",
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

const myStore = useItemsStore();

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

// onMounted(() => {
//   console.log("onMounted in layout..");
// });

// onUpdated(() => {
//   console.log("onUpdated in layout");
// });
</script>
<style>
.p-card .p-card-content {
  padding: 0rem 0 !important;
}
</style>
