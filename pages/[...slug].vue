<template>
  <main>
    <ContentDoc>
      <template #not-found>
        <h1>Nothing to see here!</h1>
      </template>
    </ContentDoc>
  </main>
</template>

<script lang="ts" setup>
definePageMeta({
  documentDriven: true,
});
</script>
