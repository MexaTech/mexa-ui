<template>
  <div
    class="flex flex-column justify-content-between h-full w-full border-round bg-no-repeat bg-cover"
    :style="`
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        url('${image}');
      `"
  >
    <div class="p-4 align-self-start">
      <div class="text-white text-2xl font-bold mb-2">{{ title }}</div>
      <span class="text-white text-lg line-height-3">
        <slot name="content">
          Quis varius quam quisque id diam. A pellentesque sit amet porttitor
          eget. Vitae purus faucibus ornare suspendisse sed nisi lacus.
        </slot>
      </span>
    </div>
    <div class="p-4 align-self-end">
      <slot name="link">
        <a
          tabindex="0"
          class="text-2xl cursor-pointer text-white flex align-items-center hover:text-primary transition-duration-150"
          >Shop Now<i class="pi pi-fw pi-arrow-right text-2xl ml-2"></i
        ></a>
      </slot>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  image: {
    type: String,
    default:
      "https://blocks.primevue.org/images/blocks/ecommerce/categorypreview/category-preview-1-9.png",
  },
  title: {
    type: String,
    default: "Category Title",
  },
});
</script>
