<template>
  <div v-show="visible">
    <div
      :class="`${color} text-gray-100 p-3 flex justify-content-between lg:justify-content-center align-items-center flex-wrap`"
    >
      <div class="font-bold mr-8">
        <slot name="title"> 🔥 Hot Deals! </slot>
      </div>
      <div class="align-items-center hidden lg:flex">
        <span class="line-height-3">
          <slot name="description">
            Libero voluptatum atque exercitationem praesentium provident odit.
          </slot>
        </span>
      </div>
      <a class="flex align-items-center ml-2 mr-8">
        <slot name="link">
          <a class="text-white" href="#">
            <span class="underline font-bold"> Learn More </span>
          </a>
        </slot>
      </a>
      <a
        class="flex align-items-center no-underline justify-content-center border-circle text-gray-50 hover:bg-bluegray-700 cursor-pointer transition-colors transition-duration-150 p-ripple"
        style="width: 2rem; height: 2rem"
        @click="visible = !visible"
      >
        <i class="pi pi-times"></i>
      </a>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  visible: {
    type: Boolean,
    default: true,
  },
  color: {
    type: String,
    default: "bg-bluegray-900",
  },
});
</script>
