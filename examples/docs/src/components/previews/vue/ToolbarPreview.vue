<script setup lang="ts">
import { ToolbarRoot, ToolbarButton, ToolbarGroup, ToolbarSeparator } from "@openlab-ui/vue";
import VuePreviewProvider from "../../VuePreviewProvider.vue";
</script>

<template>
  <VuePreviewProvider>
    <ToolbarRoot>
      <ToolbarGroup>
        <ToolbarButton aria-label="Bold"><b>B</b></ToolbarButton>
        <ToolbarButton aria-label="Italic"><i>I</i></ToolbarButton>
        <ToolbarButton aria-label="Underline"><u>U</u></ToolbarButton>
      </ToolbarGroup>
      <ToolbarSeparator />
      <ToolbarGroup>
        <ToolbarButton>Left</ToolbarButton>
        <ToolbarButton>Center</ToolbarButton>
      </ToolbarGroup>
    </ToolbarRoot>
  </VuePreviewProvider>
</template>
