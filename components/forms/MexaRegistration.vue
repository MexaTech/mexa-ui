<template lang="">
  <section class="flex align-items-center justify-content-center">
    <div class="surface-card p-4 shadow-2 border-round w-full">
      <div class="text-center mb-5">
        <slot name="logo">
          <img
            src="https://blocks.primevue.org/images/blocks/hero/hero-1.png"
            alt="Image"
            class="mb-3 w-2"
          />
        </slot>
        <div class="text-900 text-3xl font-medium mb-3 font-sans">
          <slot name="title"> Create an account </slot>
        </div>
      </div>

      <div>
        <slot name="form">
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
              <Checkbox id="rememberme1" :binary="true" class="mr-2"></Checkbox>
              <label for="rememberme1">Remember me</label>
            </div>
          </div>
        </slot>
      </div>
      <slot name="btn">
        <Button
          class="google p-2 w-full text-center flex justify-content-center"
          aria-label="Sign in"
        >
          <i class="pi pi-lock px-2"></i>
          <span class="px-3 text-center">Sign up</span>
        </Button>
      </slot>
      <hr class="mt-5" />

      <div class="mt-3 text-center">
        <slot name="links">
          <p>Or continue with</p>
          <Button icon="pi pi-facebook" class="p-button-rounded bg-blue-600" />
          <Button
            icon="pi pi-google"
            class="ml-5 p-button-rounded bg-red-600"
          />
        </slot>
      </div>
      <div class="text-center mt-5">
        <slot name="footer">
          <p>By creating an account you agree our terms</p>
          <router-link
            to="/forms/registration"
            class="font-bold no-underline ml-2 text-primary-800 cursor-pointer"
            >Terms of service</router-link
          >
        </slot>
      </div>
    </div>
  </section>
</template>

<script setup></script>
<style scoped>
label,
span,
div {
  font-family: "Monserrat", sans-serif;
}
</style>
