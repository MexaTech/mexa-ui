// https://nuxt.com/docs/api/configuration/nuxt-config
import { join } from "pathe";
import Components from "unplugin-vue-components/vite";

export default defineNuxtConfig({
  
  ssr: false,
  css: [
    "primevue/resources/themes/tailwind-light/theme.css",
    "primevue/resources/primevue.css",
    "primevue/resources/primevue.min.css",
    "primeicons/primeicons.css",
    'primeflex/primeflex.css'
  ],
  build: {
    transpile: ["primevue"],
  },
  plugins: [{ src: "~/plugins/primevue.js", mode: "client" }],
});
