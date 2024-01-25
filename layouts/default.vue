<template>
  <main class="container">
    <NavBar />
    <slot />

    <Footer />
  </main>
</template>

<script lang="ts" setup>
useHead({
  title: "Pascal Wengerter | My humble web presence",
  meta: [
    {
      name: "description",
      content:
        "Digital all-rounder, fan of Democracy and Open Source Software. Currently in Lisbon, exploring new opportunities.",
    },
  ],
});
</script>

<style scoped>
main {
  padding: 1rem;
}
</style>
