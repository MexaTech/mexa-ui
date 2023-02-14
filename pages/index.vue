<template>
  <div>
    <Button
      icon="pi pi-arrow-right"
      @click="visibleSidebar = !visibleSidebar"
      class="mr-2"
    />
    <mexa-sidebar :active="visibleSidebar" />
  </div>
</template>
<script setup>
const visibleSidebar = ref(false);
</script>
