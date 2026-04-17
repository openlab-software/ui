<script setup lang="ts">
import { Popover, PopoverTrigger, PopoverContent, Button } from "@openlab-ui/vue";
import VuePreviewProvider from "../../VuePreviewProvider.vue";
</script>

<template>
  <VuePreviewProvider>
    <Popover>
      <PopoverTrigger as-child>
        <Button variant="outline">Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent style="width: 280px">
        <div style="display: flex; flex-direction: column; gap: 0.5rem">
          <p style="font-weight: 600; font-size: 0.875rem">Dimensions</p>
          <p style="font-size: 0.8125rem; color: var(--color-muted-foreground)">
            Set the dimensions of the container.
          </p>
        </div>
      </PopoverContent>
    </Popover>
  </VuePreviewProvider>
</template>
