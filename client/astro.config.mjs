// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
// export default defineConfig({});

export default defineConfig({
    image: {
      domains: ["localhost"],
      base: "/",
    },
    public: {
      STRAPI_URL: process.env.STRAPI_URL || "http://localhost:1337", // Default to localhost if the env variable isn't set
    },
  });

  