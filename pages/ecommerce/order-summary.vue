<template>
  <EcommerceOrderSummary :summary="summary">
    <template #header>
      <span class="text-700 text-xl">Thanks!</span>
      <div class="text-900 font-bold text-4xl my-2">Successful Order 🚀</div>
      <p class="text-700 text-xl mt-0 mb-4 p-0">
        Your order is on the way. It'll be shipped today. We'll inform you.
      </p>
    </template>
    <template #order>
      <div class="mb-3 sm:mb-0">
        <span class="font-medium text-xl text-900 mr-2">Order number:</span
        ><span class="font-medium text-xl text-blue-500">451234</span>
      </div>
      <div>
        <Button
          label="Submit"
          icon="pi pi-list"
          class="p-button-outlined p-button-secondary mr-2"
          outlined
        />
        <Button
          label="Submit"
          icon="pi pi-print"
          severity="secondary"
          class="p-button-outlined p-button-secondary mr-2"
          outlined
        />
      </div>
    </template>
    <template #content>
      <EcommerceProductItem
        :summary="true"
        v-for="(item, index) in items"
        :key="index"
        :product="item"
      />
    </template>
  </EcommerceOrderSummary>
</template>
<script setup>
const items = ref([
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

const summary = ref([
  {
    name: "Subtotal",
    amount: 85.0,
  },
  {
    name: "Shipping",
    amount: 5.15,
  },
  {
    name: "Discount",
    amount: -1.09,
  },
  {
    name: "Tax",
    amount: 4.35,
  },
]);
</script>
