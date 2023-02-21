<template>
  <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="text-700 text-center">
      <div class="text-blue-600 font-bold mb-3">
        {{ info }}
      </div>
      <div class="text-900 font-bold text-5xl mb-3">
        {{ title }}
      </div>
      <div class="text-700 text-2xl mb-5">
        {{ subtitle }}
      </div>
      <Button
        :label="btn.label"
        :icon="btn.icon"
        class="font-bold px-5 py-3 p-button-raised p-button-rounded white-space-nowrap"
      ></Button>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "Join Our Design Community",
  },
  subtitle: {
    type: String,
    default:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos.",
  },
  info: {
    type: String,
    default: "POWERED BY DISCORD",
  },
  btn: {
    type: Object,
    default: {
      label: "Join Now",
      icon: "pi pi-discord",
    },
  },
});
</script>
