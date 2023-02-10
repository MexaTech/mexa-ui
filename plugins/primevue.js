import { defineNuxtPlugin } from "#app";
import PrimeVue from "primevue/config";
import Slider from "primevue/slider";
import Image from "primevue/image";
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp
    .use(PrimeVue)
    .component("Slider", Slider)
    .component("Image", Image);
});
