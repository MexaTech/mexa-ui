<template>
  <div>
    <Sidebar v-model:visible="visible" :baseZIndex="10000">
      <h3>Left Sidebar</h3>
    </Sidebar>
  </div>
</template>
<script setup>
const props = defineProps({
  active: {
    type: Boolean,
    default: false,
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
