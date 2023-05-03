<template>
  <div>
    <ul class="list-none m-0 p-0">
      <slot name="content">
        <EcommerceProductItem
          v-for="item in list"
          :key="item.id"
          :product="item"
        >
          <template #quantity>
            <div class="flex flex-row">
              <div class="col-4">
                <EcommerceButtonQuantity
                  type="minus"
                  @click="subtraction(item.id)"
                />
              </div>
              <div class="col-4">
                <input
                  class="p-inputtext p-component p-inputnumber-input w-3rem text-center"
                  role="spinbutton"
                  aria-valuemin="0"
                  aria-valuenow="1"
                  v-model="item.quantity"
                />
              </div>
              <div class="col-4">
                <EcommerceButtonQuantity @click="addition(item.id)" />
              </div>
            </div>
          </template>
          <template #remove>
            <EcommerceButtonRemove @click="remove(item.id)" />
          </template>
        </EcommerceProductItem>
      </slot>
      <li class="py-3">
        <slot name="footer">
          <div class="flex align-items-center justify-content-between mb-3">
            <span class="font-medium text-900">
              Total Amount
              <span class="text-sm text-600">incl. VAT</span>
            </span>
            <span class="font-bold text-900">$ {{ subtotal }}</span>
          </div>
          <EcommerceButtonCheckout />
          <EcommerceButtonContinue />
        </slot>
      </li>
    </ul>
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
        price: 10.0,
        quantity: 1,
        option: "Red | M",
        image:
          "https://blocks.primevue.org/images/blocks/ecommerce/shoppingcart/shopping-cart-3-1.png",
      },
    ],
  },
});
const list = ref(props.items);
const subtotal = ref(0);

const getSubtotal = () => {
  subtotal.value = 0;
  list.value.forEach((element) => {
    subtotal.value += element.price * element.quantity;
  });
};

onMounted(() => {
  getSubtotal();
});

const subtraction = (id) => {
  const item = list.value.find((element) => element.id === id);
  if (item && item.quantity > 1) {
    item.quantity--;
  }
  getSubtotal();
};

const addition = (id) => {
  const item = list.value.find((element) => element.id === id);
  if (item) {
    item.quantity++;
  }
  getSubtotal();
};

const remove = (id) => {
  list.value = list.value.filter((element) => element.id !== id);
  getSubtotal();
};
</script>
