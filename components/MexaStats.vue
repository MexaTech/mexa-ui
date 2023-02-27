<template>
  <div class="col-12 md:col-6 lg:col-3">
    <div class="surface-card shadow-2 p-3 border-round">
      <div class="flex justify-content-between mb-3">
        <div>
          <span class="block text-500 font-medium mb-3">
            <slot name="title" />
          </span>
          <div class="text-900 font-medium text-xl">
            <slot name="quantity" />
          </div>
        </div>
        <div
          class="flex align-items-center justify-content-center bg-gray-100 border-round"
          style="width: 2.5rem; height: 2.5rem"
        >
          <slot name="icon" />
        </div>
      </div>
      <slot name="details" />
    </div>
  </div>
</template>
