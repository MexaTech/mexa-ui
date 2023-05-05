<template>
  <Button label="Show" icon="pi pi-external-link" @click="visible = true" />
  <Dialog
    v-model:visible="visible"
    modal
    header="Header"
    :style="{ width: '50vw' }"
  >
    <EcommerceShoppingCart :items="products"> </EcommerceShoppingCart>
  </Dialog>
</template>
<script setup>
const visible = ref(false);

const products = ref([
  {
    id: 1,
    name: "Product 1",
    price: 15.0,
    quantity: 1,
    option: "Red | XL",
    image:
      "https://blocks.primevue.org/images/blocks/ecommerce/shoppingcart/shopping-cart-3-1.png",
  },
  {
    id: 2,
    name: "Product 2",
    price: 20.0,
    quantity: 1,
    option: "Blue | S",
    image:
      "https://blocks.primevue.org/images/blocks/ecommerce/shoppingcart/shopping-cart-3-2.png",
  },
  {
    id: 3,
    name: "Product 3",
    price: 50.0,
    quantity: 1,
    option: "Black | L",
    image:
      "https://blocks.primevue.org/images/blocks/ecommerce/shoppingcart/shopping-cart-3-1.png",
  },
]);

watch(products, (value) => {
  console.log("Watching...");
});
</script>
