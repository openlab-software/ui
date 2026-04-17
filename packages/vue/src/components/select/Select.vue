<script setup lang="ts">
import { provide, ref } from "vue";

const model = defineModel<string>();
const isOpen = ref(false);

provide("select-dropdown", {
  get value() { return model.value; },
  get isOpen() { return isOpen.value; },
  setValue: (v: string) => {
    model.value = v;
    isOpen.value = false;
  },
  toggle: () => { isOpen.value = !isOpen.value; },
  close: () => { isOpen.value = false; },
});
</script>

<template>
  <div style="position: relative; display: inline-block">
    <slot />
  </div>
</template>
