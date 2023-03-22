<template>
  <div>
    <Sidebar v-model:visible="visible" :baseZIndex="10000">
      <div class="">
        <div class="profile-data">
          <slot name="header">
            <mexa-avatar type="icon" title="pi pi-user" shape="" />
            <h3>Username</h3>
          </slot>
          <slot name="options">
            <Button
              type="button"
              label="Profile"
              badge="8"
              icon="pi pi-users"
              class="p-button-primary"
            />
          </slot>
        </div>
        <div class="menu overflow-y-auto">
          <slot name="menu">
            <mexa-panel-menu :items="items" />
          </slot>
        </div>
        <div class="footer">
          <slot name="footer">
            <mexa-avatar
              type="image"
              title="https://via.placeholder.com/300"
              size="xlarge"
              shape="circle"
            />
            Dashboard Template
          </slot>
        </div>
      </div>
    </Sidebar>
  </div>
</template>
<script setup>
import { ref, reactive, computed, watch } from "vue";
// import MexaAvatar from "./Avatars/MexaAvatar.vue";
import MexaAvatar from "@/components/Avatars/MexaAvatar.vue";
const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
  items: {
    type: Array,
    default: [
      {
        key: "0",
        label: "File",
        icon: "pi pi-fw pi-file",
        items: [
          {
            key: "0_0",
            label: "New",
            icon: "pi pi-fw pi-plus",
            items: [
              {
                key: "0_0_0",
                label: "Bookmark",
                icon: "pi pi-fw pi-bookmark",
              },
              {
                key: "0_0_1",
                label: "Video",
                icon: "pi pi-fw pi-video",
              },
            ],
          },
          {
            key: "0_1",
            label: "Delete",
            icon: "pi pi-fw pi-trash",
          },
          {
            key: "0_2",
            label: "Export",
            icon: "pi pi-fw pi-external-link",
          },
        ],
      },
    ],
  },
});
const visible = ref(false);
const statusSidebar = computed({
  get() {
    return props.active;
  },
});

watch(
  statusSidebar,
  async () => {
    visible.value = !visible.value;
  },
  { immediate: true }
);
</script>
<style scoped>
.profile-data {
  text-align: center;
}

.menu {
  margin-top: 10px;
}

.footer {
  position: absolute;
  bottom: 0;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  font-weight: bold;
}
</style>
