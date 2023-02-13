<template>
  <div>
    <mexa-avatar type="label" title="E" size="xlarge" />
    <mexa-avatar
      type="label"
      title="E"
      avatarStyle="background-color: #2196f3 !important; color: #ffffff"
      size="large"
    />
    <mexa-avatar
      type="label"
      title="E"
      avatarStyle="background-color: #2196f3 !important; color: #ffffff"
      size="large"
      shape="circle"
    />
    <mexa-avatar type="label" title="A" size="xlarge" />
    <mexa-avatar
      type="image"
      title="https://via.placeholder.com/300"
      size="xlarge"
    />
    <mexa-avatar type="icon" title="pi pi-user" size="xlarge" shape="circle" />
    <mexa-avatar
      type="image"
      title="https://via.placeholder.com/300"
      size="xlarge"
      shape="circle"
    />
    <mexa-avatar-group :fields="list" />
  </div>
</template>

<script setup>
import MexaAvatar from "@/components/Avatars/MexaAvatar.vue";
import MexaAvatarGroup from "@/components/MexaAvatarGroup.vue";

const list = ref([
  {
    id: 1,
    type: "label",
    title: "A",
    size: "xlarge",
  },
  {
    id: 2,
    type: "label",
    title: "B",
    size: "xlarge",
  },
  {
    id: 3,
    type: "label",
    title: "C",
    size: "xlarge",
  },
  {
    id: 4,
    type: "label",
    title: "D",
    size: "xlarge",
  },
  {
    id: 5,
    type: "image",
    title: "https://via.placeholder.com/300",
    size: "xlarge",
  },
  {
    id: 6,
    type: "label",
    title: "+2",
    size: "xlarge",
    style: "background-color: #9c27b0; color: #ffffff",
  },
]);
</script>
<style scoped></style>
