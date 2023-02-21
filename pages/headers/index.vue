<template>
  <mexa-call-to-action />
  <mexa-banner
    title="Ofertas"
    description="Aprovecha la promo"
    :link="{ label: 'Quiero detalles', href: '/' }"
    bannerStyle="background-color: red !important;"
  />
  <br />
  <mexa-banner />
  <br />
  <mexa-banner bannerStyle="background-color: #183462 !important" />
</template>
<script setup>
import MexaCallToAction from "@/components/Headers/MexaCallToAction.vue";
import MexaBanner from "@/components/Headers/MexaBanner.vue";
</script>
