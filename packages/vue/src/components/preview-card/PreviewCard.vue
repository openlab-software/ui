<script setup lang="ts">
import { provide, ref } from "vue";

const isOpen = ref(false);
let timer: ReturnType<typeof setTimeout> | null = null;

provide("preview-card", {
  get isOpen() { return isOpen.value; },
  show: () => {
    timer = setTimeout(() => { isOpen.value = true; }, 300);
  },
  hide: () => {
    if (timer) clearTimeout(timer);
    isOpen.value = false;
  },
});
</script>

<template>
  <div style="position: relative; display: inline-block">
    <slot />
  </div>
</template>
