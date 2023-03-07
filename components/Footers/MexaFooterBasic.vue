<template>
  <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="border-top-1 border-300 pt-5 text-center">
      <slot name="logo">
        <img
          src="http://caribbeandigitalgroup.com/CDG.svg"
          alt="Image"
          height="40"
        />
      </slot>
      <ul
        class="list-none p-0 mx-0 my-5 flex justify-content-center flex-column align-items-center lg:flex-row"
      >
        <li>
          <slot name="navigations_items">
            <a class="text-600 cursor-pointer line-height-3" href="/"> Home </a>
          </slot>
        </li>
      </ul>
      <div class="flex align-items-center justify-content-center mb-5">
        <slot name="social">
          <a
            class="cursor-pointer border-circle bg-bluegray-100 text-bluegray-500 block inline-flex justify-content-center align-items-center"
            style="width: 2.5rem; height: 2.5rem"
            ><i class="pi pi-twitter"></i
          ></a>
        </slot>
      </div>
      <div class="text-center">
        <slot name="links">
          <a
            class="mr-5 text-sm text-600 cursor-pointer"
            href="/privacy-policy"
          >
            Privacy Policy
          </a>
          <a class="text-sm text-600 cursor-pointer" href="/terms-of-service"
            >Terms of Service</a
          >
        </slot>
      </div>
    </div>
  </div>
</template>
<style scoped>
a {
  text-decoration: none !important;
}
</style>
