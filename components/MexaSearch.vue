<template>
  <div>
    <InputText
      placeholder="Search"
      type="text"
      v-model="search"
      @input="searching"
    />
  </div>
</template>
<script setup>
const emit = defineEmits(["search_data"]);
const search = ref("");
const searching = () => {
  emit("search_data", search);
};
</script>
