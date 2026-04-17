<script setup lang="ts">
import * as styles from "@openlab-ui/core/select/select.css";
import { inject } from "vue";

interface Props {
  size?: "default" | "sm";
  placeholder?: string;
}

const props = withDefaults(defineProps<Props>(), { size: "default" });

const ctx = inject<{
  value?: string;
  isOpen: boolean;
  toggle: () => void;
}>("select-dropdown");
</script>

<template>
  <button
    type="button"
    data-slot="select-trigger"
    :data-size="props.size"
    :class="styles.trigger"
    :aria-expanded="ctx?.isOpen"
    @click="ctx?.toggle()"
  >
    <span :class="styles.value">
      <slot>{{ ctx?.value ?? props.placeholder ?? 'Select...' }}</slot>
    </span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      style="pointer-events: none; flex-shrink: 0; color: var(--muted-foreground)"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  </button>
</template>
