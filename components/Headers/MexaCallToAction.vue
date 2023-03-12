<template>
  <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="text-700 text-center">
      <div class="text-blue-600 font-bold mb-3">
        <slot name="info"> POWERED BY DISCORD </slot>
      </div>
      <div class="text-900 font-bold text-5xl mb-3">
        <slot name="title"> Join Our Design Community </slot>
      </div>
      <div class="text-700 text-2xl mb-5">
        <slot name="subtitle">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
          numquam eligendi quos.
        </slot>
      </div>
      <div>
        <slot name="action">
          <Button
            label="Join Now"
            icon="pi pi-discord"
            class="font-bold px-5 py-3 p-button-raised p-button-rounded white-space-nowrap"
          ></Button>
        </slot>
      </div>
    </div>
  </div>
</template>
