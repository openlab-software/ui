<script setup lang="ts">
import { Tooltip, TooltipTrigger, TooltipContent, Button } from "@openlab-ui/vue";
import VuePreviewProvider from "../../VuePreviewProvider.vue";
</script>

<template>
  <VuePreviewProvider>
    <Tooltip>
      <TooltipTrigger as-child>
        <Button variant="outline">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>This is a tooltip</p>
      </TooltipContent>
    </Tooltip>
    <Tooltip>
      <TooltipTrigger as-child>
        <Button variant="outline" size="sm">Top</Button>
      </TooltipTrigger>
      <TooltipContent side="top">
        <p>Appears on top</p>
      </TooltipContent>
    </Tooltip>
  </VuePreviewProvider>
</template>
