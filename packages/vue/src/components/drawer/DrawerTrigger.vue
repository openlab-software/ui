<script setup lang="ts">
import { inject } from "vue";

const ctx = inject<{ open: () => void }>("drawer");
</script>

<template>
  <div style="display: contents" @click="ctx?.open()">
    <slot />
  </div>
</template>
