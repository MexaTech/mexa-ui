<template>
  <div>
    <mexa-title />
    <pre>{{ dataItems.getItemsFiltered }}</pre>
    <mexa-hero></mexa-hero>
    <div class="grid">
      <div class="col-12 lg:col-4">
        <div class="p-3 h-full">
          <mexa-price />
        </div>
      </div>
      <div class="col-12 lg:col-4">
        <div class="p-3 h-full">
          <mexa-price>
            <template #name> Premium </template>
            <template #description>Plan description Premium </template>
            <template #price>$ 29</template>
            <template #period>per month</template>
            <template #items>
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
              <li class="flex align-items-center mb-3">
                <i class="pi pi-check-circle text-green-500 mr-2"></i
                ><span class="text-900">Duis ultricies lacus sed</span>
              </li>
            </template>
            <template #action>
              <button
                class="p-button p-component p-3 w-full mt-auto p-button-success"
                type="button"
                aria-label="Buy Premium Now"
              >
                <span class="p-button-label">Buy Premium Now</span
                ><span
                  class="p-ink"
                  role="presentation"
                  aria-hidden="true"
                ></span>
              </button>
            </template>
          </mexa-price>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useItemsStore } from "@/stores/items";
definePageMeta({
  layout: "default",
});

const dataItems = useItemsStore();
dataItems.items = [{ name: "Edson" }, { name: "Allison" }, { name: "Pamela" }];
const mival = ref(false);
</script>
