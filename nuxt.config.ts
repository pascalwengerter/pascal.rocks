export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  devtools: { enabled: process.env.NODE_ENV === "development" },
  modules: ["@nuxt/content", "@nuxt/image"],
  postcss: {
    plugins: {
      autoprefixer: {},
    },
  },
  nitro: {
    prerender: {
      routes: ["/", "/_ipx/_/images/pascalwengerter.jpg"],
    },
  },
});
