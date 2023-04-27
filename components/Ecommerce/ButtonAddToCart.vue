<template>
  <button
    class="p-button p-component w-full"
    type="button"
    aria-label="Add to Cart"
  >
    <span class="pi pi-shopping-cart p-button-icon p-button-icon-left"></span
    ><span class="p-button-label">
      <slot name="title"> Add to Cart </slot> </span
    ><span
      class="p-ink"
      role="presentation"
      aria-hidden="true"
      style="height: 342px; width: 342px; top: -149.823px; left: 44.3333px"
    ></span>
  </button>
</template>
