<script setup lang="ts">
import { provide, ref } from "vue";

interface Props {
  defaultOpen?: boolean;
}

const props = defineProps<Props>();

const model = defineModel<boolean>();
const isOpen = ref(model.value ?? props.defaultOpen ?? false);

provide("dialog", {
  get isOpen() { return isOpen.value; },
  open: () => {
    isOpen.value = true;
    model.value = true;
  },
  close: () => {
    isOpen.value = false;
    model.value = false;
  },
});
</script>

<template>
  <slot />
</template>
