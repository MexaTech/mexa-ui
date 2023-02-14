<template lang="">
  <section class="flex align-items-center justify-content-center">
    <div class="surface-card p-4 shadow-2 border-round w-full lg:w-3 mt-8">
      <div class="text-center mb-5">
        <img :src="src" :alt="alt" :class="class" />
        <div class="text-900 text-3xl font-medium mb-3 font-sans">
          Create an account
        </div>
      </div>

      <div>
        <label for="Name" class="block text-900 font-medium mb-2">Name</label>
        <InputText id="Name" type="text" class="w-full mb-3" />
        <label for="email1" class="block text-900 font-medium mb-2"
          >Email</label
        >
        <InputText id="email1" type="text" class="w-full mb-3" />

        <label for="password1" class="block text-900 font-medium mb-2"
          >Password</label
        >
        <InputText id="password1" type="password" class="w-full mb-3" />
        <label for="password1" class="block text-900 font-medium mb-2"
          >Repeat Password</label
        >
        <InputText id="password2" type="password" class="w-full mb-3" />

        <div class="flex align-items-center justify-content-between mb-6">
          <div class="flex align-items-center">
            <Checkbox
              id="rememberme1"
              :binary="true"
              v-model="checked"
              class="mr-2"
            ></Checkbox>
            <label for="rememberme1">Remember me</label>
          </div>
        </div>
      </div>
      <Button
        class="google p-2 w-full text-center flex justify-content-center"
        aria-label="Sign in"
      >
        <i class="pi pi-lock px-2"></i>
        <span class="px-3 text-center">Sign up</span>
      </Button>
      <hr class="mt-5" />
      <div class="mt-3 text-center">
        <p>Or continue with</p>
        <Button icon="pi pi-facebook" class="p-button-rounded bg-blue-600" />
        <Button icon="pi pi-google" class="ml-5 p-button-rounded bg-red-600" />
      </div>
      <div class="text-center mt-5">
        <p>By creating an account you agree our terms</p>
        <router-link
          to="/forms/registration"
          class="font-bold no-underline ml-2 text-primary-800 cursor-pointer"
          >Terms of service</router-link
        >
      </div>
    </div>
  </section>
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
