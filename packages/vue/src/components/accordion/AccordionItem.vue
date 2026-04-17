<script setup lang="ts">
import * as styles from "@openlab-ui/core/accordion/accordion.css";
import { computed, inject, provide } from "vue";
import type { Ref } from "vue";

interface Props {
  value: string;
  disabled?: boolean;
}

const props = defineProps<Props>();

const ctx = inject<{
  openItems: Ref<string[]>;
  toggle: (value: string) => void;
}>("accordion");

const isOpen = computed(() => ctx?.openItems.value.includes(props.value) ?? false);

provide("accordion-item", {
  get isOpen() { return isOpen.value; },
  toggle: () => ctx?.toggle(props.value),
  disabled: props.disabled,
});
</script>

<template>
  <div
    data-slot="accordion-item"
    :data-open="isOpen ? '' : undefined"
    :class="styles.item"
  >
    <slot />
  </div>
</template>
