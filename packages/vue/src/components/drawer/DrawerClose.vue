<script setup lang="ts">
import { inject } from "vue";

const ctx = inject<{ close: () => void }>("drawer");
</script>

<template>
  <div style="display: contents" @click="ctx?.close()">
    <slot />
  </div>
</template>
