<script setup lang="ts">
import { Button } from "@openlab-ui/vue";
import VuePreviewProvider from "../../VuePreviewProvider.vue";
</script>

<template>
  <VuePreviewProvider>
    <div style="display: flex; flex-direction: column; gap: 0.75rem; align-items: flex-start">
      <p style="font-size: 0.875rem; color: var(--color-muted-foreground)">
        Toast notifications can be integrated with any toast library.
      </p>
      <Button variant="outline">Show Toast</Button>
    </div>
  </VuePreviewProvider>
</template>
