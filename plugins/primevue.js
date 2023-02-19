import { defineNuxtPlugin } from "#app";
import PrimeVue from "primevue/config";
import Slider from "primevue/slider";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Checkbox from "primevue/checkbox";
import Dropdown from 'primevue/dropdown';
import CascadeSelect from 'primevue/cascadeselect';
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp
    .use(PrimeVue)
    .component("Slider", Slider)
    .component("Button", Button)
    .component("InputText", InputText)
    .component("Dropdown", Dropdown)
    .component("CascadeSelect", CascadeSelect)
    .component("Checkbox", Checkbox);
});
