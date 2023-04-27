<template>
  <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="grid">
      <div class="col-12 md:col-6">
        <slot name="image">
          <img
            src="https://blocks.primevue.org/images/blocks/feature/feature-2.png"
            alt="Image"
            class="w-full"
          />
        </slot>
      </div>
      <div class="col-12 md:col-6 md:pl-6">
        <slot name="header">
          <div
            class="p-3 inline-flex align-items-center surface-900 text-0 mb-4 font-medium"
            style="border-radius: 30px"
          >
            <i class="pi pi-star-fill mr-2"></i><span>Open Source API</span>
          </div>
          <div class="text-4xl font-bold text-900 mb-3">Redefine Possible</div>
          <div class="text-700 text-lg mb-5 line-height-3 mb-5">
            Ac turpis egestas maecenas pharetra convallis posuere morbi leo
            urna.
          </div>
        </slot>
        <div class="content">
          <div
            class="flex align-items-center mb-4"
            v-for="item in items"
            :key="item.id"
          >
            <i class="pi pi-check text-green-600 mr-3"></i>
            <div>
              <div class="text-900 font-medium mb-2">{{ item.title }}</div>
              <div class="text-700">
                {{ item.subtitle }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  items: {
    type: Array,
    default: [
      {
        id: 0,
        title: "Simple to Use",
        subtitle: "Duis aute irure dolor in reprehenderit in voluptate velit.",
      },
      {
        id: 1,
        title: "Personalized Design",
        subtitle: "Eu turpis egestas pretium aenean pharetra.",
      },
      {
        id: 2,
        title: "Status Notifications",
        subtitle:
          "Tortor dignissim convallis aenean et tortor at risus viverra.",
      },
      {
        id: 3,
        title: "Interactive Templates",
        subtitle: "Risus nec feugiat in fermentum posuere urna nec.",
      },
    ],
  },
});
</script>
