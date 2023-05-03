<template>
  <div
    class="bg-no-repeat bg-cover px-4 py-8 md:px-6 lg:px-8 text-center"
    :style="`
      background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
        url('${image}');
    `"
  >
    <div class="text-white text-5xl font-bold mb-4 text-white z-1">
      {{ title }}
    </div>
    <p class="line-height-3 mt-0 mb-6 p-0 text-white text-3xl">
      <slot name="content">
        Malesuada bibendum arcu vitae elementum curabitur vitae nunc. Aliquam
        nulla facilisi cras fermentum. Et egestas quis ipsum suspendisse
        ultrices.
      </slot>
    </p>
    <slot name="action">
      <button
        class="p-button p-component p-button-rounded text-2xl"
        type="button"
        aria-label="VIEW THE SHOP"
      >
        <span class="p-button-label">VIEW THE SHOP</span>
        <span class="p-ink" role="presentation" aria-hidden="true"></span>
      </button>
    </slot>
  </div>
</template>
<script setup>
const props = defineProps({
  image: {
    type: String,
    default:
      "https://blocks.primevue.org/images/blocks/ecommerce/promosection/promo-section-1-1.jpg",
  },
  title: {
    type: String,
    default: "Promo Title Placeholder",
  },
});
</script>
