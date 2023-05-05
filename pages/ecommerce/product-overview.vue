<template>
  <div>
    <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
      <EcommerceProductOverview />
      <EcommerceProductOverview :images="images">
        <template #title> Nike product </template>
        <template #price> $150</template>
        <template #action>
          <EcommerceButtonAddToCart @click="AddToCart" />
        </template>
      </EcommerceProductOverview>
    </div>
  </div>
</template>
<script setup>
const images = ref([
  {
    id: 0,
    url: "https://blocks.primevue.org/images/blocks/ecommerce/productoverview/product-overview-2-1.png",
    active: false,
  },
  {
    id: 1,
    url: "https://blocks.primevue.org/images/blocks/ecommerce/productoverview/product-overview-2-2.png",
    active: true,
  },
  {
    id: 2,
    url: "https://blocks.primevue.org/images/blocks/ecommerce/productoverview/product-overview-2-3.png",
    active: false,
  },
  {
    id: 3,
    url: "https://blocks.primevue.org/images/blocks/ecommerce/productoverview/product-overview-2-4.png",
    active: false,
  },
]);

const AddToCart = () => {
  console.log("AddToCart...");
};
</script>
