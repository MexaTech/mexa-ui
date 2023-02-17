<template>
  <mexa-menubar @search_data="search" />
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
</script>
