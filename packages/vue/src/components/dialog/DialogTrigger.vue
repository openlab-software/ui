<script setup lang="ts">
import { inject } from "vue";

const ctx = inject<{ open: () => void }>("dialog");
</script>

<template>
  <div data-slot="dialog-trigger" style="display: contents" @click="ctx?.open()">
    <slot />
  </div>
</template>
