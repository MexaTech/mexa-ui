<template>
  <Avatar
    v-if="type == 'label'"
    :label="title"
    class="mr-2"
    :style="avatarStyle"
    :size="size"
    :shape="shape"
  />
  <Avatar
    v-else-if="type == 'image'"
    :image="title"
    class="mr-2"
    :style="avatarStyle"
    :size="size"
    :shape="shape"
  />
  <Avatar
    v-else
    :icon="title"
    class="mr-2"
    :style="avatarStyle"
    :size="size"
    :shape="shape"
  />
</template>
<script setup>
const props = defineProps({
  type: {
    type: String,
    default: "icon",
  },
  title: {
    type: String,
    default: "pi pi-user",
  },
  avatarStyle: {
    type: String,
    default: "mr-2",
  },
  size: {
    type: String,
    default: "xlarge",
  },
  shape: {
    type: String,
    default: "",
  },
});
</script>
