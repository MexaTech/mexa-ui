<template>
  <div v-show="visible">
    <div
      class="bg-bluegray-900 text-gray-100 p-3 flex justify-content-between lg:justify-content-center align-items-center flex-wrap"
    >
      <div class="font-bold mr-8">{{ title }}</div>
      <div class="align-items-center hidden lg:flex">
        <span class="line-height-3">
          {{ description }}
        </span>
      </div>
      <a class="flex align-items-center ml-2 mr-8">
        <a class="text-white" :href="link.href">
          <span class="underline font-bold"> {{ link.label }} </span>
        </a>
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
  title: {
    type: String,
    default: "🔥 Hot Deals!",
  },
  description: {
    type: String,
    default:
      "Libero voluptatum atque exercitationem praesentium provident odit.",
  },
  link: {
    type: Object,
    default: {
      label: "Learn More",
      href: "#",
    },
  },
});
</script>
