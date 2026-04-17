<script setup lang="ts">
import { inject } from "vue";

const ctx = inject<{ toggle: () => void }>("popover");
</script>

<template>
  <div data-slot="popover-trigger" style="display: contents" @click="ctx?.toggle()">
    <slot />
  </div>
</template>
