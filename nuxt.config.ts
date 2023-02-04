// https://nuxt.com/docs/api/configuration/nuxt-config
import { join } from "pathe";
import Components from "unplugin-vue-components/vite";

export default defineNuxtConfig({
  css: [
    "primevue/resources/themes/saga-blue/theme.css",
    "primevue/resources/primevue.css",
    "primeicons/primeicons.css",
  ],
  build: {
    transpile: ["primevue"],
  },
  vite: {
    plugins: [
      Components({
        extensions: ["vue"],
        include: [/\.vue$/, /\.vue\?vue/],
        dts: "src/components.d.ts",
        dirs: ["src/**/*", "node_modules/primevue/**/*"],
      }),
    ],
  },
  hooks: {
    "components:dirs"(dirs) {
      dirs.push({
        path: join(__dirname, "components"),
        prefix: "mexa",
      });
    },
  },
});
