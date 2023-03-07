<template>
  <Menubar :model="items">
    <template #start>
      <slot name="start">
        <img
          alt="logo"
          src="https://primefaces.org/cdn/primevue/images/logo.svg"
          height="40"
          class="mr-2"
        />
      </slot>
    </template>
    <template #end>
      <slot name="end">
        <ul
          class="list-none p-0 m-0 flex lg:align-items-center select-none lg:flex-row border-top-1 surface-border lg:border-top-none"
        >
          <li class="item-icon">
            <a
              class="flex align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150"
            >
              <i
                class="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0 p-overlay-badge"
              >
                <span
                  id="pv_id_2_badge"
                  class="p-badge p-component p-badge-danger p-badge-dot"
                >
                </span> </i
            ></a>
          </li>
          <li class="item-icon">
            <a
              class="flex align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150"
            >
              <i
                class="pi pi-fw pi-power-off text-base lg:text-2xl mr-2 lg:mr-0 p-overlay-badge"
              ></i
            ></a>
          </li>
        </ul>
      </slot>
    </template>
  </Menubar>
</template>
<script setup>
// const emit = defineEmits(["search_data"]);
const props = defineProps({
  items: {
    type: Array,
    default: [
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
        label: "Edit",
        icon: "pi pi-fw pi-pencil",
        items: [
          {
            label: "Left",
            icon: "pi pi-fw pi-align-left",
          },
          {
            label: "Right",
            icon: "pi pi-fw pi-align-right",
          },
          {
            label: "Center",
            icon: "pi pi-fw pi-align-center",
          },
          {
            label: "Justify",
            icon: "pi pi-fw pi-align-justify",
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
    ],
  },
});
// const search = ref("");

// const searching = () => {
//   console.log("searching from component...");
//   emit("search_data", search);
// };
</script>
<style scoped>
.item-icon {
  margin-left: 15px !important;
}
</style>
