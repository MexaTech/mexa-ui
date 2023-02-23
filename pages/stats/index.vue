<template>
  <div class="surface-ground px-4 py-5 md:px-6 lg:px-8">
    <div class="grid">
      <mexa-stats />
      <mexa-stats
        title="Comments"
        quantity="120 Unread"
        :icon="{
          name: 'pi-comment',
          color: 'text-purple-500',
          background: 'bg-purple-100',
        }"
        :detail="{ quantity: 50, label: 'responded', positive: false }"
      />
      <mexa-stats
        title="Orders"
        quantity="152"
        :icon="{
          name: 'pi-shopping-cart',
          color: 'text-blue-500',
          background: 'bg-blue-100',
        }"
        :detail="{ quantity: 24, label: 'news' }"
      />
      <mexa-stats
        title="Revenue"
        quantity="$2.100"
        :icon="{
          name: 'pi-map-marker',
          color: 'text-orange-500',
          background: 'bg-orange-100',
        }"
        :detail="{ quantity: '%52+', label: 'since last week' }"
      />
      <mexa-stats
        title="Example"
        quantity="300 Emails"
        :icon="{
          name: 'pi-inbox',
          color: 'text-cyan-500',
          background: 'bg-cyan-100',
        }"
      />
    </div>
  </div>
</template>
