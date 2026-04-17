<script setup lang="ts">
import { Button } from "@openlab-ui/vue";
import VuePreviewProvider from "../../VuePreviewProvider.vue";

const props = defineProps<{ section?: string }>();
</script>

<template>
  <VuePreviewProvider>
    <template v-if="!props.section || props.section === 'variants'">
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="link">Link</Button>
    </template>
    <template v-else-if="props.section === 'sizes'">
      <Button size="xs">Extra Small</Button>
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
    </template>
    <template v-else-if="props.section === 'disabled'">
      <Button disabled>Default</Button>
      <Button disabled variant="secondary">Secondary</Button>
      <Button disabled variant="outline">Outline</Button>
    </template>
  </VuePreviewProvider>
</template>
