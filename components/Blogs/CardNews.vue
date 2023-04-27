<template>
  <div
    class="shadow-2 border-round-xl"
    :style="`
      background: linear-gradient(15deg, ${color[0]}, ${color[1]});
      border-left: 10px solid transparent;
    `"
  >
    <div class="p-4 border-round surface-card h-full">
      <div class="flex mb-3">
        <div class="p-avatar p-component p-avatar-image p-avatar-circle">
          <slot name="avatar">
            <img
              src="https://blocks.primevue.org/images/blocks/avatars/circle/avatar-f-4.png"
            />
          </slot>
        </div>
        <div class="ml-2">
          <div class="font-medium text-900 mb-1">
            <slot name="autor"> Arlene McCoy </slot>
          </div>
          <div class="text-sm flex align-items-center text-700">
            <span>
              <slot name="date"> 9 July, 2022 </slot>
            </span>
            <div
              class="border-circle surface-300 mx-2"
              style="width: 0.25rem; height: 0.25rem"
            ></div>
            <span>
              <slot name="time"> 16 min read </slot>
            </span>
          </div>
        </div>
      </div>
      <div class="text-xl text-900 font-medium mb-3 line-height-3">
        <slot name="title"> 'Real and imminent' extinction risk </slot>
      </div>
      <div class="line-height-3 text-700">
        <slot name="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </slot>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  color: {
    type: Array,
    default: ["#f91616", "#f97516"],
  },
});
</script>
