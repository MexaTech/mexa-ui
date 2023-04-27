<template>
  <div class="surface-section text-center px-4 py-8 md:px-6 lg:px-8">
    <slot name="header">
      <div
        class="bg-blue-50 text-blue-600 font-bold border-round px-2 py-1 mx-auto mb-3"
        style="max-width: 350px"
      >
        🔥&nbsp;3,907 businesses already subscribed
      </div>
      <div class="text-2xl text-900 font-bold mb-3">
        Subscribe to our newsletter today
      </div>
      <p class="text-600 line-height-3 mb-6">
        Join our community to receieve the latest updates and special
        promotions.
      </p>
    </slot>
    <div class="flex align-items-center justify-content-center">
      <slot name="content">
        <input
          class="p-inputtext p-component p-3 border-noround border-round-left"
          placeholder="Enter your email"
          style="min-width: 250px"
        /><button
          class="p-button p-component p-button-icon-only border-noround border-round-right p-3 w-auto"
          type="button"
        >
          <span class="pi pi-chevron-right p-button-icon"></span
          ><span class="p-button-label">&nbsp;</span
          ><span class="p-ink" role="presentation" aria-hidden="true"></span>
        </button>
      </slot>
    </div>
  </div>
</template>
