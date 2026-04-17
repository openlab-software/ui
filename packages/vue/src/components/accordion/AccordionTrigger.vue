<script setup lang="ts">
import * as styles from "@openlab-ui/core/accordion/accordion.css";
import { inject } from "vue";

const ctx = inject<{ isOpen: boolean; toggle: () => void; disabled?: boolean }>(
  "accordion-item"
);
</script>

<template>
  <div :class="styles.header">
    <button
      type="button"
      data-slot="accordion-trigger"
      :aria-expanded="ctx?.isOpen"
      :disabled="ctx?.disabled"
      :class="styles.trigger"
      @click="ctx?.toggle()"
    >
      <slot />
      <svg
        data-slot="accordion-trigger-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        :style="`pointer-events: none; flex-shrink: 0; transition: transform 150ms; transform: rotate(${ctx?.isOpen ? 180 : 0}deg)`"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    </button>
  </div>
</template>
