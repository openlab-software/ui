<script setup lang="ts">
import * as styles from "@openlab-ui/core/number-field/number-field.css";
import { inject } from "vue";

const ctx = inject<{
  value: number;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  setValue: (v: number) => void;
}>("number-field");
</script>

<template>
  <input
    type="number"
    :class="styles.input"
    :value="ctx?.value"
    :min="ctx?.min"
    :max="ctx?.max"
    :step="ctx?.step"
    :disabled="ctx?.disabled"
    @change="ctx?.setValue(Number(($event.target as HTMLInputElement).value))"
  />
</template>
