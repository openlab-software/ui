<script setup lang="ts">
import * as styles from "@openlab-ui/core/collapsible/collapsible.css";
import { inject } from "vue";

const ctx = inject<{ isOpen: boolean; toggle: () => void; disabled?: boolean }>(
  "collapsible"
);
</script>

<template>
  <button
    type="button"
    :aria-expanded="ctx?.isOpen"
    :disabled="ctx?.disabled"
    :class="styles.trigger"
    @click="ctx?.toggle()"
  >
    <slot />
  </button>
</template>
