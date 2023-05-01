<template>
  <div class="grid mb-7">
    <div class="col-12 lg:col-6">
      <div class="flex">
        <div class="flex flex-column w-2 justify-content-between">
          <img
            v-for="item in images"
            :key="item.id"
            :src="item.url"
            :class="`w-full cursor-pointer border-2 border-round border-transparent transition-colors transition-duration-150 ${
              item.active ? 'border-primary' : ''
            }`"
            @click="selectedImage(item.id)"
          />
        </div>
        <div class="pl-3 w-10">
          <img :src="imagePrimary" class="w-full border-round" />
        </div>
      </div>
    </div>
    <div class="col-12 lg:col-6 py-3 lg:pl-6">
      <div class="flex align-items-center text-xl font-medium text-900 mb-4">
        <slot name="title"> Product Title Placeholder </slot>
      </div>
      <div class="flex align-items-center justify-content-between mb-5">
        <span class="text-900 font-medium text-3xl block">
          <slot name="price"> $120 </slot>
        </span>
        <div class="flex align-items-center">
          <span class="mr-3">
            <i
              class="pi pi-star-fill text-yellow-500 mr-1"
              v-for="item in stars_active"
              :key="item"
            ></i>
            <i
              class="pi pi-star text-yellow-500 mr-1"
              v-for="item in stars_inactive"
              :key="item"
            ></i>
          </span>
          <span class="text-sm">
            <slot name="reviews">
              <b class="text-900 mr-1">24</b>
              <span class="text-500"></span>reviews
            </slot>
          </span>
        </div>
      </div>
      <slot name="color">
        <div class="font-bold text-900 mb-3">Color</div>
        <div class="flex align-items-center mb-5">
          <div
            class="w-2rem h-2rem flex-shrink-0 border-circle bg-bluegray-500 mr-3 cursor-pointer border-2 surface-border transition-all transition-duration-300"
            style=""
          ></div>
          <div
            class="w-2rem h-2rem flex-shrink-0 border-circle bg-green-500 mr-3 cursor-pointer border-2 surface-border transition-all transition-duration-300"
            style=""
          ></div>
          <div
            class="w-2rem h-2rem flex-shrink-0 border-circle bg-blue-500 cursor-pointer border-2 surface-border transition-all transition-duration-300"
            style="box-shadow: 0 0 0 0.2rem var(--blue-500)"
          ></div>
        </div>
      </slot>

      <div class="mb-3 flex align-items-center justify-content-between">
        <slot name="header_option">
          <span class="font-bold text-900">Size</span
          ><a
            tabindex="0"
            class="cursor-pointer text-600 text-sm flex align-items-center"
            >Size Guide <i class="ml-1 pi pi-angle-right"></i
          ></a>
        </slot>
      </div>
      <div class="grid grid-nogutter align-items-center mb-5">
        <slot name="options">
          <div
            class="col h-3rem border-1 border-300 text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-3 cursor-pointer hover:surface-100 transition-duration-150 transition-colors"
          >
            XS
          </div>
          <div
            class="col h-3rem border-1 border-300 text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-3 cursor-pointer hover:surface-100 transition-duration-150 transition-colors"
          >
            S
          </div>
          <div
            class="col h-3rem border-1 border-300 text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-3 cursor-pointer hover:surface-100 transition-duration-150 transition-colors"
          >
            M
          </div>
          <div
            class="col h-3rem border-1 border-300 text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-3 cursor-pointer hover:surface-100 transition-duration-150 transition-colors border-blue-500 border-2 text-blue-500"
          >
            L
          </div>
          <div
            class="col h-3rem border-1 border-300 text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round cursor-pointer hover:surface-100 transition-duration-150 transition-colors"
          >
            XL
          </div>
        </slot>
      </div>

      <div class="font-bold text-900 mb-3">Quantity</div>
      <div
        class="flex flex-column sm:flex-row sm:align-items-center sm:justify-content-between"
      >
        <div class="flex flex-row">
          <slot name="quantity">
            <div class="col-4">
              <EcommerceButtonQuantity type="minus" />
            </div>
            <div class="col-4">
              <input
                class="p-inputtext p-component p-inputnumber-input w-3rem text-center"
                role="spinbutton"
                aria-valuemin="0"
                aria-valuenow="1"
                value="1"
              />
            </div>
            <div class="col-4">
              <EcommerceButtonQuantity />
            </div>
          </slot>
        </div>

        <div class="flex align-items-center flex-1 mt-3 sm:mt-0 ml-0 sm:ml-5">
          <slot name="action">
            <EcommerceButtonAddToCart />
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  images: {
    type: Array,
    default: [
      {
        id: 0,
        url: "https://blocks.primevue.org/images/blocks/ecommerce/productoverview/product-overview-3-1.png",
        active: false,
      },
      {
        id: 1,
        url: "https://blocks.primevue.org/images/blocks/ecommerce/productoverview/product-overview-3-2.png",
        active: true,
      },
      {
        id: 2,
        url: "https://blocks.primevue.org/images/blocks/ecommerce/productoverview/product-overview-3-3.png",
        active: false,
      },
      {
        id: 3,
        url: "https://blocks.primevue.org/images/blocks/ecommerce/productoverview/product-overview-3-4.png",
        active: false,
      },
    ],
  },
  stars: {
    type: Number,
    default: 0,
  },
});

const limit = ref(5);
const stars_active = ref(0);
const stars_inactive = ref(0);
stars_active.value = props.stars;
stars_inactive.value = limit.value - props.stars;

const imagePrimary = ref(
  "https://blocks.primevue.org/images/blocks/ecommerce/productoverview/product-overview-3-4.png"
);

const selectedImage = async (id) => {
  props.images.forEach((element) => {
    if (element.id == id) {
      element.active = true;
      imagePrimary.value = element.url;
    } else {
      element.active = false;
    }
  });
};

onMounted(() => {
  console.log("onMounted");
  props.images.forEach((element) => {
    if (element.active == true) {
      imagePrimary.value = element.url;
    }
  });
});
</script>
<style scoped>
.transition-duration-150 {
  -webkit-transition-duration: 0.15s !important;
  transition-duration: 0.15s !important;
}

.transition-colors {
  -webkit-transition-property: background-color, border-color, color !important;
  transition-property: background-color, border-color, color !important;
}

.cursor-pointer {
  cursor: pointer !important;
}
</style>
