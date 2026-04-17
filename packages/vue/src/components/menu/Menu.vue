<script setup lang="ts">
import { provide, ref } from "vue";

const isOpen = ref(false);

provide("menu", {
  get isOpen() { return isOpen.value; },
  toggle: () => { isOpen.value = !isOpen.value; },
  close: () => { isOpen.value = false; },
});
</script>

<template>
  <div style="position: relative; display: inline-block">
    <slot />
  </div>
</template>
