<template>
  <div class="col-12 md:col-6 lg:col-3">
    <div class="surface-card shadow-2 p-3 border-round">
      <div class="flex justify-content-between mb-3">
        <div>
          <span class="block text-500 font-medium mb-3">{{ title }}</span>
          <div class="text-900 font-medium text-xl">
            {{ quantity }} {{ unit }}
          </div>
        </div>
        <div
          :class="`flex align-items-center justify-content-center ${icon.background} border-round`"
          style="width: 2.5rem; height: 2.5rem"
        >
          <i :class="`pi ${icon.name} ${icon.color} text-xl`"></i>
        </div>
      </div>
      <span
        :class="`${
          detail.positive == false ? 'text-red-500' : 'text-green-500'
        } font-medium`"
        >{{ detail.quantity }}
      </span>
      <span class="text-500">&nbsp;{{ detail.label }}</span>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "Title",
  },
  quantity: {
    type: String,
    default: 0,
  },
  unit: {
    type: String,
    default: "",
  },
  icon: {
    type: Object,
    default: {
      name: "", // pi-comment
      color: "", // text-purple-500
      background: "", // bg-purple-100
    },
  },
  detail: {
    type: Object,
    default: {
      quantity: "",
      label: "",
      positive: true,
    },
  },
});
</script>
