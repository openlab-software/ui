<script setup lang="ts">
import { PreviewCardRoot, PreviewCardTrigger, PreviewCardPopup } from "@openlab-ui/vue";
import VuePreviewProvider from "../../VuePreviewProvider.vue";
</script>

<template>
  <VuePreviewProvider>
    <p style="font-size: 0.875rem">
      Hover over
      <PreviewCardRoot>
        <PreviewCardTrigger>
          <a href="https://vuejs.org" style="text-decoration: underline">Vue.js</a>
        </PreviewCardTrigger>
        <PreviewCardPopup>
          <strong>Vue.js</strong>
          <p style="margin: 0.25rem 0 0; font-size: 0.8125rem">The progressive JavaScript framework.</p>
        </PreviewCardPopup>
      </PreviewCardRoot>
      to see a preview.
    </p>
  </VuePreviewProvider>
</template>
