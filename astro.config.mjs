// @ts-check
import { defineConfig } from "astro/config";
import astroI18n from "@kubaxius/astro-i18n-mini";

// https://astro.build/config
export default defineConfig({
  integrations: [
    astroI18n({
      locales: ["en", "pl"],
      defaultLocale: "pl",
      translations: {
        directory: "src/i18n/translations",
        onMissing: "fallback",
        warnOnMissing: true,
      },
      routing: {
        prefixDefaultLocale: true,
        redirectToDefaultLocale: true,
      },
    }),
  ],
});
