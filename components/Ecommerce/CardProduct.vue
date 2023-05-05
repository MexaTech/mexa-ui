<template>
  <div class="p-2">
    <div class="relative mb-3">
      <slot name="image">
        <img
          src="https://blocks.primevue.org/images/blocks/ecommerce/productlist/product-list-5-2.png"
          class="w-full"
        />
      </slot>
      <slot name="likeit">
        <EcommerceButtonLikeProduct @click="likeProduct" />
      </slot>
      <span
        class="bg-pink-500 text-pink-50 font-bold px-2 py-1 absolute"
        style="border-radius: 1rem; right: 1rem; bottom: 1rem"
        v-show="offer != ''"
        >{{ offer }}</span
      >
    </div>
    <span class="text-900 font-medium text-xl">
      <slot name="title"> Product Name </slot>
    </span>
    <div class="my-3">
      <span class="mr-3">
        <i
          class="pi pi-star-fill text-yellow-500 mr-1"
          v-for="i in stars_active"
          :key="i"
        />
        <i
          class="pi pi-star text-yellow-500 mr-1"
          v-for="i in stars_inactive"
          :key="i"
        />
      </span>
      <span class="text-500">
        <slot name="reviews">
          <span v-show="reviews != ''">12 reviews</span>
        </slot>
      </span>
    </div>
    <div class="mb-4">
      <span class="line-through text-600">
        <slot name="old_price">
          <span v-show="old_price != ''">{{ old_price }}</span>
        </slot>
      </span>
      <span class="font-bold text-900 ml-2">
        <slot name="price">
          <span v-show="price != ''">{{ price }}</span>
        </slot>
      </span>
    </div>
    <slot name="action">
      <EcommerceButtonAddToCart @click="AddToCart" />
    </slot>
  </div>
</template>
<script setup>
const props = defineProps({
  offer: {
    type: String,
    default: "",
  },
  stars: {
    type: Number,
    default: 0,
  },
  reviews: {
    type: String,
    default: "",
  },
  old_price: {
    type: String,
    default: "",
  },
  price: {
    type: String,
    default: "",
  },
});

const limit = ref(5);
const stars_active = ref(0);
const stars_inactive = ref(0);
stars_active.value = props.stars;
stars_inactive.value = limit.value - props.stars;

const likeProduct = () => {
  console.log("Like it...");
};

const AddToCart = async () => {
  console.log("Add to cart");
};
</script>
