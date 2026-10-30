<script setup lang="ts">
import { Spinner, Skeleton } from "@openlab-ui/vue";
import VuePreviewProvider from "../../VuePreviewProvider.vue";
</script>

<template>
  <VuePreviewProvider>
    <Spinner style="width: 1rem; height: 1rem" />
    <Spinner />
    <Spinner style="width: 2rem; height: 2rem" />
    <div style="width: 100%; max-width: 320px; display: flex; flex-direction: column; gap: 0.5rem; margin-top: 1rem">
      <Skeleton style="height: 1rem; width: 60%" />
      <Skeleton style="height: 0.75rem; width: 90%" />
      <Skeleton style="height: 0.75rem; width: 75%" />
    </div>
  </VuePreviewProvider>
</template>
