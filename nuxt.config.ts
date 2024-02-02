export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  devtools: { enabled: process.env.NODE_ENV === "development" },
  modules: ["@nuxt/content", "@nuxt/image"],
  postcss: {
    plugins: {
      autoprefixer: {},
    },
  },
});
