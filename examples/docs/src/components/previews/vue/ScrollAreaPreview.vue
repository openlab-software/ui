<script setup lang="ts">
import { ScrollArea } from "@openlab-ui/vue";
import VuePreviewProvider from "../../VuePreviewProvider.vue";

const tags = Array.from({ length: 30 }, (_, i) => `Tag ${i + 1}`);
</script>

<template>
  <VuePreviewProvider>
    <ScrollArea style="height: 200px; width: 300px; border: 1px solid var(--color-border); border-radius: 4px">
      <div style="padding: 1rem">
        <div
          v-for="tag in tags"
          :key="tag"
          style="padding: 0.375rem 0; font-size: 0.875rem; border-bottom: 1px solid var(--color-border)"
        >
          {{ tag }}
        </div>
      </div>
    </ScrollArea>
  </VuePreviewProvider>
</template>
