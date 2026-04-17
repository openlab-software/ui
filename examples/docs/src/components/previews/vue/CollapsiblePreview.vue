<script setup lang="ts">
import { CollapsibleRoot, CollapsibleTrigger, CollapsiblePanel, Button } from "@openlab-ui/vue";
import VuePreviewProvider from "../../VuePreviewProvider.vue";
</script>

<template>
  <VuePreviewProvider>
    <div style="width: 100%; max-width: 400px">
      <CollapsibleRoot :default-open="true">
        <CollapsibleTrigger>
          <Button variant="outline" style="width: 100%; justify-content: space-between">Toggle section ▾</Button>
        </CollapsibleTrigger>
        <CollapsiblePanel>
          <div style="padding: 0.75rem 0; font-size: 0.875rem; color: var(--color-muted-foreground)">
            <p>This content can be collapsed or expanded by clicking the trigger above.</p>
          </div>
        </CollapsiblePanel>
      </CollapsibleRoot>
    </div>
  </VuePreviewProvider>
</template>
