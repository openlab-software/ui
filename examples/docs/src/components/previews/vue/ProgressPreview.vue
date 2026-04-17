<script setup lang="ts">
import { Progress } from "@openlab-ui/vue";
import VuePreviewProvider from "../../VuePreviewProvider.vue";
</script>

<template>
  <VuePreviewProvider>
    <div style="width: 100%; max-width: 400px; display: flex; flex-direction: column; gap: 1.5rem">
      <Progress :value="33" />
      <Progress :value="66" />
      <Progress :value="100" />
    </div>
  </VuePreviewProvider>
</template>
