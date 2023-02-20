<template>
  <div>
    <mexa-menubar @search_data="search" :image="image" :items="items" />
    <mexa-sidebar
      :active="visibleSidebar"
      :username="username"
      :avatar="avatar"
      :items="navigation"
    />
    <Card>
      <template #content>
        <mexa-breadcrumb />
        <slot />
      </template>
    </Card>
  </div>
</template>
<script setup>
const visibleSidebar = ref(false);
const username = ref("Edson");
const avatar = ref({
  type: "image",
  title: "https://via.placeholder.com/300",
  shape: "circle",
});
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
            command: () => {
              log_out();
            },
          },
        ],
      },
    ],
  },
]);

const log_out = () => {
  console.log("log out...");
};

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
const data_filter = ref();
const search_input = ref("");

data_filter.value = data.value;

const search = (input) => {
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
};

const image = ref({
  alt: "logo",
  src: "http://caribbeandigitalgroup.com/CDG.svg",
  height: "40",
});

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
  {
    label: "Quit",
    icon: "pi pi-fw pi-power-off",
  },
]);
</script>
<style>
.p-card .p-card-content {
  padding: 0rem 0 !important;
}
</style>
