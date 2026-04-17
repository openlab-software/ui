<script setup lang="ts">
import { inject } from "vue";

const ctx = inject<{ close: () => void }>("dialog");
</script>

<template>
  <div data-slot="dialog-close" style="display: contents" @click="ctx?.close()">
    <slot />
  </div>
</template>
