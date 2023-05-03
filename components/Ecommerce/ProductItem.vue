<template>
  <li class="py-3 surface-border flex align-items-start sm:align-items-center">
    <img :src="product.image" class="w-6rem sm:w-8rem flex-shrink-0" />
    <div class="pl-3 flex-auto">
      <div class="flex align-items-center justify-content-between mb-3">
        <span class="font-medium text-900">{{ product.name }} </span
        ><span class="font-bold text-900"
          >$ {{ product.quantity * product.price }}</span
        >
      </div>
      <div class="text-600 text-sm mb-3">
        <span>$ {{ product.price }} </span>
      </div>
      <div class="text-600 text-sm mb-3">
        <span> {{ product.option }} </span>
      </div>
      <div class="flex align-items-center justify-content-between">
        <span
          class="p-inputnumber p-component p-inputwrapper p-inputwrapper-filled p-inputnumber-buttons-horizontal border-1 surface-border border-round"
          spinnermode="horizontal"
        >
          <slot name="quantity">
            <div class="flex flex-row">
              <div class="col-4">
                <EcommerceButtonQuantity type="minus" />
              </div>
              <div class="col-4">
                <input
                  class="p-inputtext p-component p-inputnumber-input w-3rem text-center"
                  role="spinbutton"
                  aria-valuemin="0"
                  aria-valuenow="1"
                  v-model="product.quantity"
                />
              </div>
              <div class="col-4">
                <EcommerceButtonQuantity />
              </div>
            </div>
          </slot>
        </span>
        <slot name="remove">
          <EcommerceButtonRemove />
        </slot>
      </div>
    </div>
  </li>
</template>
<script setup>
const props = defineProps({
  product: {
    type: Object,
    default: {
      title: "Product Name",
      price: 10.0,
      option: "Blue | XL",
      quantity: 1,
      image:
        "https://blocks.primevue.org/images/blocks/ecommerce/shoppingcart/shopping-cart-3-1.png",
    },
  },
});
</script>
