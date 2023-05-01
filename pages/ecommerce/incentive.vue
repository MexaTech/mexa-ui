<template>
  <EcommerceIncentive />
  <EcommerceIncentive background="bg-cyan-100">
    <template #icon>
      <MexaIcon bg="bg-cyan-500">
        <template #content>
          <i class="pi pi-arrow-right text-white text-2xl"></i>
        </template>
      </MexaIcon>
    </template>
    <template #title>
      <span class="text-cyan-900 text-lg font-medium"
        >120 Days Return Policy</span
      >
    </template>
  </EcommerceIncentive>
  <EcommerceIncentive background="bg-orange-100">
    <template #icon>
      <MexaIcon bg="bg-orange-500">
        <template #content>
          <i class="pi pi-shield text-white text-2xl"></i>
        </template>
      </MexaIcon>
    </template>
    <template #title>
      <span class="text-orange-900 text-lg font-medium">10 Year Warranty</span>
    </template>
  </EcommerceIncentive>
  <EcommerceIncentive background="bg-green-100">
    <template #icon>
      <MexaIcon bg="bg-green-500">
        <template #content>
          <i class="pi pi-refresh text-white text-2xl"></i>
        </template>
      </MexaIcon>
    </template>
    <template #title>
      <span class="text-green-900 text-lg font-medium"
        >Environment Friendly</span
      >
    </template>
  </EcommerceIncentive>
</template>
