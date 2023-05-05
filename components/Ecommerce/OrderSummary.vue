<template>
  <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="">
      <slot name="header">
        <span class="text-700 text-xl">Thanks!</span>
        <div class="text-900 font-bold text-4xl my-2">Successful Order 🚀</div>
        <p class="text-700 text-xl mt-0 mb-4 p-0">
          Your order is on the way. It'll be shipped today. We'll inform you.
        </p>
      </slot>
    </div>

    <MexaDivider />
    <div
      class="flex flex-column sm:flex-row sm:align-items-center sm:justify-content-between py-5"
    >
      <slot name="order">
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
      </slot>
    </div>
    <div class="border-round surface-border border-1">
      <ul class="list-none m-4 p-0">
        <slot name="content">
          <EcommerceProductItem
            :summary="true"
            v-for="(item, index) in items"
            :key="index"
            :product="item"
          />
        </slot>
      </ul>
    </div>
    <div class="flex flex-wrap mt-5 pb-3">
      <div class="w-full lg:w-6 pl-3">
        <slot name="address">
          <span class="font-medium font-bold text-900">Shipping Address</span>
          <div class="flex flex-column text-900 mt-3 mb-5">
            <span class="mb-1">Celeste Slater</span
            ><span class="mb-1">606-3727 Ullamcorper. Roseville NH 11523</span
            ><span>(786) 713-8616</span>
          </div>
        </slot>
        <span class="font-medium font-bold text-900">Payment</span>
        <slot name="payment_method">
          <EcommerceCreditCard />
        </slot>
      </div>
      <div
        class="w-full lg:w-6 pl-3 lg:pl-0 lg:pr-3 flex align-items-end mt-5 lg:mt-0"
      >
        <ul class="list-none p-0 m-0 w-full">
          <li class="mb-3">
            <span class="font-medium font-bold text-900">Summary</span>
          </li>
          <li
            class="flex justify-content-between mb-3"
            v-for="(item, index) in summary"
            :key="index"
          >
            <span class="text-900">{{ item.name }}</span
            ><span class="text-900 font-medium text-lg"
              >$ {{ item.amount }}</span
            >
          </li>
          <li
            class="flex justify-content-between border-top-1 surface-border py-3"
          >
            <span class="text-900 font-medium">Total</span>
            <span class="text-900 font-bold text-lg">$ {{ total }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  items: {
    type: Array,
    default: [
      {
        id: 1,
        name: "Product 0",
        price: 36.25,
        quantity: 1,
        option: "Red | M",
        image:
          "https://blocks.primevue.org/images/blocks/ecommerce/shoppingcart/shopping-cart-3-1.png",
      },
    ],
  },
  summary: {
    type: Array,
    default: [
      {
        name: "Subtotal",
        amount: 36.25,
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
    ],
  },
});

const total = ref(0);

props.summary.forEach((element) => {
  total.value += element.amount;
});
</script>
