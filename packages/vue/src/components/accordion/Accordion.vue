<script setup lang="ts">
import * as styles from "@openlab-ui/core/accordion/accordion.css";
import { provide, ref } from "vue";

interface Props {
  multiple?: boolean;
  defaultValue?: string | string[];
}

const props = defineProps<Props>();

const openItems = ref<string[]>(
  Array.isArray(props.defaultValue)
    ? props.defaultValue
    : props.defaultValue
      ? [props.defaultValue]
      : []
);

provide("accordion", {
  openItems,
  toggle: (value: string) => {
    if (props.multiple) {
      openItems.value = openItems.value.includes(value)
        ? openItems.value.filter((v) => v !== value)
        : [...openItems.value, value];
    } else {
      openItems.value = openItems.value[0] === value ? [] : [value];
    }
  },
});
</script>

<template>
  <div data-slot="accordion" :class="styles.root">
    <slot />
  </div>
</template>
