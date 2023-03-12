<template>
  <div>
    <div
      class="shadow-2 p-3 h-full flex flex-column surface-card"
      style="border-radius: 6px"
    >
      <div class="text-900 font-medium text-xl mb-2">
        <slot name="name"> Basic </slot>
      </div>
      <div class="text-600">
        <slot name="description"> Plan description </slot>
      </div>
      <hr class="my-3 mx-0 border-top-1 border-none surface-border" />
      <div class="flex align-items-center">
        <span class="font-bold text-2xl text-900">
          <slot name="price">$9</slot></span
        ><span class="ml-2 font-medium text-600">
          <slot name="period">per month</slot>
        </span>
      </div>
      <hr class="my-3 mx-0 border-top-1 border-none surface-border" />
      <ul class="list-none p-0 m-0 flex-grow-1">
        <slot name="items">
          <li class="flex align-items-center mb-3">
            <i class="pi pi-check-circle text-green-500 mr-2"></i
            ><span class="text-900">Arcu vitae elementum</span>
          </li>
          <li class="flex align-items-center mb-3">
            <i class="pi pi-check-circle text-green-500 mr-2"></i
            ><span class="text-900">Dui faucibus in ornare</span>
          </li>
          <li class="flex align-items-center mb-3">
            <i class="pi pi-check-circle text-green-500 mr-2"></i
            ><span class="text-900">Morbi tincidunt augue</span>
          </li>
        </slot>
      </ul>
      <hr class="mb-3 mx-0 border-top-1 border-none surface-border mt-auto" />
      <slot name="action">
        <button
          class="p-button p-component p-3 w-full mt-auto"
          type="button"
          aria-label="Buy Now"
        >
          <span class="p-button-label">Buy Now</span
          ><span class="p-ink" role="presentation" aria-hidden="true"></span>
        </button>
      </slot>
    </div>
  </div>
</template>
