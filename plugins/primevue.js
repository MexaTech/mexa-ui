import { defineNuxtPlugin } from "#app";
import PrimeVue from "primevue/config";
import Slider from "primevue/slider";
import Image from "primevue/image";
import Avatar from "primevue/avatar";
import Badge from "primevue/badge";
import AvatarGroup from "primevue/avatargroup";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Checkbox from "primevue/checkbox";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp
    .use(PrimeVue, { ripple: true })
    .component("Slider", Slider)
    .component("Image", Image)
    .component("Avatar", Avatar)
    .component("Badge", Badge)
    .component("AvatarGroup", AvatarGroup)
    .component("Button", Button)
    .component("InputText", InputText)
    .component("Checkbox", Checkbox);
});
