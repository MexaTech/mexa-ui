<template>
  <div class="grid grid-nogutter surface-section text-800">
    <div
      class="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center"
    >
      <section>
        <span class="block text-6xl font-bold mb-1">
          <slot name="title"> Create the screens </slot>
        </span>
        <div class="text-6xl text-primary font-bold mb-3">
          <slot name="subtitle"> visitors deserve to see </slot>
        </div>
        <p class="mt-0 mb-4 text-700 line-height-3">
          <slot name="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </slot>
        </p>
        <slot name="action">
          <Button
            label="Learn More"
            type="button"
            class="mr-3 p-button-raised"
          ></Button>
          <Button
            label="Live Demo"
            type="button"
            class="p-button-outlined"
          ></Button>
        </slot>
      </section>
    </div>
    <div class="col-12 md:col-6 overflow-hidden">
      <img
        :src="image"
        alt="Image"
        class="md:ml-auto block md:h-full"
        style="clip-path: polygon(8% 0, 100% 0%, 100% 100%, 0 100%)"
      />
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  image: {
    type: String,
    default: "https://blocks.primevue.org/images/blocks/hero/hero-1.png",
  },
});
</script>
