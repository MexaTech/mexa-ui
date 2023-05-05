<template>
  <div
    class="flex justify-content-between p-3 border-round border-1 surface-border w-full mr-3 hover:border-primary cursor-pointer"
  >
    <div class="mr-3 lg:mr-0">
      <div class="text-900 font-bold mb-2">{{ title }}</div>
      <span class="text-600">{{ subtitle }}</span>
    </div>
    <div class="flex justify-content-between align-items-center">
      <slot name="content">
        <label for="ups" class="text-primary mr-2 font-medium">$9.00</label>
        <RadioButton v-model="radio" inputId="ups" name="ups" value="UPS" />
      </slot>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "Title",
  },
  subtitle: {
    type: String,
    default: "Subtitle",
  },
});
const radio = ref("");
</script>
