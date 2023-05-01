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
    label: "Forms",
    icon: "pi pi-circle-fill",
    items: [
      {
        key: "1_0",
        label: "Profile",
        icon: "pi pi-fw pi-circle-fill",
        url: "/forms/profile",
      },
      {
        key: "1_1",
        label: "Registration",
        icon: "pi pi-fw pi-circle-fill",
        url: "/forms/registration",
      },
      {
        key: "1_2",
        label: "Resetpass",
        icon: "pi pi-fw pi-circle-fill",
        url: "/forms/resetpass",
      },
      {
        key: "1_3",
        label: "Signin",
        icon: "pi pi-fw pi-circle-fill",
        url: "/forms/signin",
      },
      {
        key: "1_4",
        label: "Contact",
        icon: "pi pi-fw pi-circle-fill",
        url: "/forms/contact",
      },
    ],
  },
  {
    key: "2",
    label: "Headers",
    icon: "pi pi-circle-fill",
    items: [
      {
        key: "2_0",
        label: "Call to Action",
        icon: "pi pi-circle-fill",
        url: "/headers/calltoaction",
      },
      {
        key: "2_1",
        label: "Hero",
        icon: "pi pi-circle-fill",
        url: "/headers/hero",
      },
      {
        key: "2_2",
        label: "Prices",
        icon: "pi pi-circle-fill",
        url: "/headers/prices",
      },
    ],
  },
  {
    key: "3",
    label: "Menus",
    icon: "pi pi-circle-fill",
    items: [
      {
        key: "3_0",
        label: "Menubar",
        icon: "pi pi-fw pi-circle-fill",
        url: "/menus/menubar",
      },
      {
        key: "3_1",
        label: "Panel Menu",
        icon: "pi pi-fw pi-circle-fill",
        url: "/menus/panel-menu",
      },
    ],
  },
  {
    key: "4",
    label: "Components Generals",
    icon: "pi pi-circle-fill",
    items: [
      {
        key: "4_0",
        label: "Stats",
        icon: "pi pi-circle-fill",
        url: "/stats",
      },
      {
        key: "4_1",
        label: "Toast",
        icon: "pi pi-circle-fill",
        url: "/toast",
      },
      {
        key: "4_2",
        label: "Slider",
        icon: "pi pi-circle-fill",
        url: "/slider",
      },
      {
        key: "4_3",
        label: "Avatar",
        icon: "pi pi-circle-fill",
        url: "/avatars",
      },
      {
        key: "4_4",
        label: "Images",
        icon: "pi pi-circle-fill",
        url: "/images",
      },
      {
        key: "4_5",
        label: "Footers",
        icon: "pi pi-circle-fill",
        url: "/footers",
      },
      {
        key: "4_6",
        label: "Newsletter",
        icon: "pi pi-circle-fill",
        url: "/newsletter",
      },
    ],
  },
  {
    key: "5",
    label: "Features",
    icon: "pi pi-circle-fill",
    items: [
      {
        key: "5_0",
        label: "Feature Grid",
        icon: "pi pi-fw pi-circle-fill",
        url: "/features/feature-grid",
      },
      {
        key: "5_1",
        label: "Feature Grid List",
        icon: "pi pi-fw pi-circle-fill",
        url: "/features/feature-grid-list",
      },
    ],
  },
  {
    key: "6",
    label: "Blogs",
    icon: "pi pi-circle-fill",
    items: [
      {
        key: "6_0",
        label: "Card blog",
        icon: "pi pi-fw pi-circle-fill",
        url: "/blogs",
      },
      {
        key: "6_0",
        label: "Card post",
        icon: "pi pi-fw pi-circle-fill",
        url: "/blogs/card-post",
      },
    ],
  },
  {
    key: "7",
    label: "E-Commerce",
    icon: "pi pi-circle-fill",
    items: [
      {
        key: "7_0",
        label: "Card product",
        icon: "pi pi-fw pi-circle-fill",
        url: "/ecommerce/card-product",
      },
      {
        key: "7_1",
        label: "Product Overview",
        icon: "pi pi-fw pi-circle-fill",
        url: "/ecommerce/product-overview",
      },
      {
        key: "7_2",
        label: "Incentive",
        icon: "pi pi-fw pi-circle-fill",
        url: "/ecommerce/incentive",
      },
      {
        key: "7_3",
        label: "Category",
        icon: "pi pi-fw pi-circle-fill",
        url: "/ecommerce/category",
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
