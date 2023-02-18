<template>
  <mexa-menubar @search_data="search" :image="image" :items="items" />
  <pre>
    {{ search_input }}
  </pre>
  <pre>
    {{ data_filter }}
  </pre>
</template>
<script setup>
// Search example
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
    label: "File",
    icon: "pi pi-fw pi-file",
    items: [
      {
        label: "New",
        icon: "pi pi-fw pi-plus",
        items: [
          {
            label: "Bookmark",
            icon: "pi pi-fw pi-bookmark",
          },
          {
            label: "Video",
            icon: "pi pi-fw pi-video",
          },
        ],
      },
      {
        label: "Delete",
        icon: "pi pi-fw pi-trash",
      },
      {
        separator: true,
      },
      {
        label: "Export",
        icon: "pi pi-fw pi-external-link",
      },
    ],
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
    label: "Events",
    icon: "pi pi-fw pi-calendar",
    items: [
      {
        label: "Edit",
        icon: "pi pi-fw pi-pencil",
        items: [
          {
            label: "Save",
            icon: "pi pi-fw pi-calendar-plus",
          },
          {
            label: "Delete",
            icon: "pi pi-fw pi-calendar-minus",
          },
        ],
      },
      {
        label: "Archieve",
        icon: "pi pi-fw pi-calendar-times",
        items: [
          {
            label: "Remove",
            icon: "pi pi-fw pi-calendar-minus",
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
