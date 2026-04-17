<script setup lang="ts">
import * as styles from "@openlab-ui/core/collapsible/collapsible.css";
import { provide, ref } from "vue";

interface Props {
  defaultOpen?: boolean;
  disabled?: boolean;
}

const props = defineProps<Props>();

const model = defineModel<boolean>();
const isOpen = ref(model.value ?? props.defaultOpen ?? false);

provide("collapsible", {
  get isOpen() { return isOpen.value; },
  toggle: () => {
    isOpen.value = !isOpen.value;
    model.value = isOpen.value;
  },
  disabled: props.disabled,
});
</script>

<template>
  <div :class="styles.root">
    <slot />
  </div>
</template>
