<template lang="">
  <div class="flex align-items-center justify-content-center">
    <div class="surface-card p-4 shadow-2 border-round w-full lg:w-3 mt-8">
      <div class="text-center mb-5">
        <img :src="src" :alt="alt" :class="class" />
        <div class="text-900 text-3xl font-medium mb-3 font-sans">
          Reset Password
        </div>
        <span class="text-600 font-medium line-height-3"
          >We will send you an email with the steps to reset your password.</span
        >

      </div>

      <div>
        <label for="email1" class="block text-900 font-medium mb-2"
          >Email</label
        >
        <InputText id="email1" type="text" class="w-full mb-3" />
      </div>
      <Button
        class="google p-2 w-full text-center flex justify-content-center"
        aria-label="Sign in"
      >
        <i class="pi pi-lock px-2"></i>
        <span class="px-3 text-center">Reset password</span>
      </Button>
    </div>
  </div>
</template>

<script setup>
const checked = ref(false);
const props = defineProps({
  src: {
    type: String,
    default: "",
  },
  alt: {
    type: String,
    default: "Image",
  },
  height: {
    type: String,
    default: "",
  },
  class: {
    type: String,
    default: "w-2",
  },
});
</script>
<style scoped>
label,
span,
div {
  font-family: "Monserrat", sans-serif;
}
</style>
