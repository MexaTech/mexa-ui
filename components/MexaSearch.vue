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
import { ref, reactive, computed, watch } from "vue";
const emit = defineEmits(["search_data"]);
const search = ref("");
const searching = () => {
  emit("search_data", search);
};
</script>
