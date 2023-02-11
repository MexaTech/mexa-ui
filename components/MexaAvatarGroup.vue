<template>
  <div>
    <AvatarGroup>
      <!-- <avatar-label label="A" size="large" shape="circle" />-->
      <mexa-avatar
        :type="item.type"
        :title="item.title"
        :avatarImage="item.image"
        size="large"
        shape="circle"
        :style="item.style"
        v-for="item in fields"
        :key="item.id"
      />
    </AvatarGroup>
  </div>
</template>
<script setup>
import MexaAvatar from "@/components/Avatars/MexaAvatar.vue";
const props = defineProps({
  fields: {
    type: Array,
    default: [{}],
  },
});
</script>
