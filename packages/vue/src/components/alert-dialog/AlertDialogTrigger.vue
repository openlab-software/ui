<script setup lang="ts">
import { inject } from "vue";

const ctx = inject<{ open: () => void }>("alert-dialog");
</script>

<template>
  <div data-slot="alert-dialog-trigger" style="display: contents" @click="ctx?.open()">
    <slot />
  </div>
</template>
