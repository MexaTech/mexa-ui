<template>
  <div class="flex align-items-center justify-content-center">
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
          <slot name="title"> Sign in to your account </slot>
        </div>
        <span class="text-600 font-medium line-height-3">
          <slot name="subtitle"> Don't have an account? </slot>
        </span>
        <slot name="registration">
          <router-link
            to="/forms/registration"
            class="font-bold no-underline ml-2 text-primary-800 cursor-pointer"
            >Create new!</router-link
          >
        </slot>
      </div>
      <div>
        <slot name="form">
          <label for="email1" class="block text-900 font-medium mb-2"
            >Email</label
          >
          <InputText id="email1" type="text" class="w-full mb-3" />

          <label for="password1" class="block text-900 font-medium mb-2"
            >Password</label
          >
          <InputText id="password1" type="password" class="w-full mb-3" />
        </slot>

        <div class="flex align-items-center justify-content-between mb-6">
          <div class="flex align-items-center">
            <slot name="rememberme">
              <Checkbox id="rememberme1" :binary="true" class="mr-2"></Checkbox>
              <label for="rememberme1">Remember me</label>
            </slot>
          </div>
          <slot name="reset">
            <a
              class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer"
              >Forgot password?</a
            >
          </slot>
        </div>
      </div>
      <slot name="btn">
        <Button
          class="google p-2 w-full text-center flex justify-content-center"
          aria-label="Sign in"
        >
          <i class="pi pi-lock px-2"></i>
          <span class="px-3 text-center">Sign in</span>
        </Button>
      </slot>
    </div>
  </div>
</template>

<script setup></script>
<style scoped>
label,
span,
div {
  font-family: "Monserrat", sans-serif;
}
</style>
