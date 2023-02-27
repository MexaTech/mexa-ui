<template>
  <div class="surface-ground px-4 py-5 md:px-6 lg:px-8">
    <div class="grid">
      <mexa-stats>
        <template #title> Orders </template>
        <template #quantity> 152 </template>
        <template #icon>
          <i class="pi pi-shopping-cart text-blue-500 text-xl"></i>
        </template>
        <template #details>
          <span class="text-green-500 font-medium">24 new </span>
          <span class="text-500">since last visit</span>
        </template>
      </mexa-stats>
      <mexa-stats>
        <template #title> Revenue </template>
        <template #quantity> $2.100 </template>
        <template #icon>
          <i class="pi pi-map-marker text-orange-500 text-xl"></i>
        </template>
        <template #details>
          <span class="text-green-500 font-medium">%52+ </span>
          <span class="text-500">since last week</span>
        </template>
      </mexa-stats>
      <mexa-stats>
        <template #title> Customers </template>
        <template #quantity> 28441 </template>
        <template #icon>
          <i class="pi pi-inbox text-cyan-500 text-xl"></i>
        </template>
        <template #details>
          <span class="text-green-500 font-medium">520 </span>
          <span class="text-500">newly registered</span>
        </template>
      </mexa-stats>
      <mexa-stats>
        <template #title> Comments </template>
        <template #quantity> 152 Unread </template>
        <template #icon>
          <i class="pi pi-comment text-purple-500 text-xl"></i>
        </template>
        <template #details>
          <span class="text-green-500 font-medium">85 </span>
          <span class="text-500">responded</span>
        </template>
      </mexa-stats>
    </div>
  </div>
</template>
