<script setup lang="ts">
import { provide, ref } from "vue";

const isOpen = ref(false);
const inputValue = ref("");

provide("combobox", {
  get isOpen() { return isOpen.value; },
  get inputValue() { return inputValue.value; },
  setInputValue: (v: string) => { inputValue.value = v; isOpen.value = true; },
  toggle: () => { isOpen.value = !isOpen.value; },
  close: () => { isOpen.value = false; },
});
</script>

<template>
  <div style="position: relative; display: inline-block">
    <slot />
  </div>
</template>
