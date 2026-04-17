<script setup lang="ts">
import { Separator } from "@openlab-ui/vue";
import VuePreviewProvider from "../../VuePreviewProvider.vue";
</script>

<template>
  <VuePreviewProvider>
    <div style="width: 100%; max-width: 400px; display: flex; flex-direction: column; gap: 1rem">
      <div>
        <p style="font-size: 0.875rem; font-weight: 500">OpenLab UI</p>
        <p style="font-size: 0.8125rem; color: var(--color-muted-foreground)">
          A component library for React and Vue.
        </p>
      </div>
      <Separator />
      <div style="display: flex; gap: 1rem; font-size: 0.875rem; align-items: center">
        <span>Components</span>
        <Separator orientation="vertical" style="height: 1.25rem" />
        <span>Theming</span>
        <Separator orientation="vertical" style="height: 1.25rem" />
        <span>Docs</span>
      </div>
    </div>
  </VuePreviewProvider>
</template>
