<template>
  <div class="surface-ground px-4 py-5 md:px-6 lg:px-8">
    <mexa-call-to-action>
      <template #info>
        <div class="text-green-600">
          <i class="pi pi-whatsapp"></i>&nbsp;POWERED BY DISCORD
        </div>
      </template>
      <template #title> Join Our Developer Community </template>
      <template #subtitle> Software development </template>
      <template #action>
        <Button
          label="Join Now"
          icon="pi pi-whatsapp"
          class="font-bold px-5 py-3 p-button-raised p-button-rounded white-space-nowrap p-button-success"
        >
        </Button>
      </template>
    </mexa-call-to-action>
  </div>
  <div class="surface-ground px-4 py-5 md:px-6 lg:px-8">
    <mexa-banner></mexa-banner>
  </div>
  <div class="surface-ground px-4 py-5 md:px-6 lg:px-8">
    <mexa-banner color="bg-primary-600"></mexa-banner>
  </div>
  <div class="surface-ground px-4 py-5 md:px-6 lg:px-8">
    <mexa-banner color="bg-green-700">
      <template #title> <i class="pi pi-github"></i> Hot Github! </template>
      <template #description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </template>
      <template #link>
        <a class="text-white" href="#">
          <span class="underline font-bold"> Leer Más </span>
        </a>
      </template>
    </mexa-banner>
  </div>
</template>
<script setup>
import MexaCallToAction from "@/components/Headers/MexaCallToAction.vue";
import MexaBanner from "@/components/Headers/MexaBanner.vue";
</script>
