<template>
  <div class="flex align-items-center mt-3">
    <img :src="image" class="w-4rem mr-3" />
    <div class="flex flex-column">
      <span class="text-900 font-bold mb-1">
        {{ title }}
      </span>
      <span class="text-900 font-medium">
        {{ number }}
      </span>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  image: {
    type: String,
    default:
      "https://blocks.primevue.org/images/blocks/ecommerce/ordersummary/visa.png",
  },
  title: {
    type: String,
    default: "Visa Debit Card",
  },
  number: {
    type: String,
    default: "**** **** **** 1234",
  },
});
</script>
