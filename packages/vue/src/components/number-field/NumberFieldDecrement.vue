<script setup lang="ts">
import * as styles from "@openlab-ui/core/number-field/number-field.css";
import { inject } from "vue";

const ctx = inject<{ decrement: () => void; disabled?: boolean }>("number-field");
</script>

<template>
  <button
    type="button"
    :class="styles.decrement"
    :disabled="ctx?.disabled"
    @click="ctx?.decrement()"
  >
    <slot>
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="m6 9 6 6 6-6" />
      </svg>
    </slot>
  </button>
</template>
