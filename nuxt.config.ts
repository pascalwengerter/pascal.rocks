export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  compatibilityDate: "2024-09-31",
  devtools: { enabled: process.env.NODE_ENV === "development" },
  image: {
    provider: "ipx",
    domains: ["pascal.rocks"],
    dir: "public/",
  },
  modules: ["@nuxt/content", "@nuxt/image"],
  postcss: {
    plugins: {
      autoprefixer: {},
    },
  },
});
