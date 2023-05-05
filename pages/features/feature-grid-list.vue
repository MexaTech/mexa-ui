<template>
  <FeaturesFeatureGridList :items="items" />
</template>
<script setup>
const items = ref([
  {
    id: 0,
    title: "Simple to Use Example",
    subtitle: "Duis aute irure dolor in reprehenderit in voluptate velit.",
  },
  {
    id: 1,
    title: "Personalized Design",
    subtitle: "Eu turpis egestas pretium aenean pharetra.",
  },
  {
    id: 2,
    title: "Status Notifications",
    subtitle: "Tortor dignissim convallis aenean et tortor at risus viverra.",
  },
  {
    id: 3,
    title: "Interactive Templates",
    subtitle: "Risus nec feugiat in fermentum posuere urna nec.",
  },
]);
</script>
