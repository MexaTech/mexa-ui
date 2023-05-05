<template>
  <div class="w-full xl:w-6 pr-0 xl:pr-6">
    <slot name="image">
      <img
        src="https://blocks.primevue.org/images/blocks/blog/blog-9.png"
        alt="Image"
        class="w-full"
      />
    </slot>

    <div class="flex align-items-center mt-4">
      <slot name="avatar">
        <img
          src="https://blocks.primevue.org/images/blocks/avatars/circle/avatar-f-3.png"
          class="mr-3 flex-shrink-0"
          width="28"
          height="28"
        />
      </slot>

      <span class="text-900 font-medium text-lg white-space-nowrap">
        <slot name="autor"> Darrel Steward </slot>
      </span>
      <span class="text-500 font-medium text-lg mx-3">|</span>
      <span class="text-500 font-medium text-lg white-space-nowrap">
        <slot name="date">Oct 7</slot>
      </span>
    </div>
    <div class="text-900 font-bold text-3xl mt-4">
      <slot name="title"> Circumpolar Cooperation </slot>
    </div>
    <p class="line-height-3 text-700 my-4">
      <slot name="content">
        Purus sit amet volutpat consequat mauris nunc congue. Odio pellentesque
        diam volutpat commodo sed egestas egestas fringilla phasellus.
      </slot>
    </p>
    <div class="flex align-items-center">
      <span class="text-600 text-sm font-medium">
        <slot name="time"> 15 min read </slot> </span
      ><span class="text-600 font-medium text-sm mx-3">|</span>
      <span
        class="bg-green-100 text-green-600 text-sm block py-1 px-2 border-round mr-3"
        v-for="item in tags"
        :key="item"
        >{{ item }}</span
      >
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  tags: {
    type: Array,
    default: ["Poles", "Nature"],
  },
});
</script>
