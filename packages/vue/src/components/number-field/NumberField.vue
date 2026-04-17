<script setup lang="ts">
import * as styles from "@openlab-ui/core/number-field/number-field.css";
import { provide } from "vue";

interface Props {
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  defaultValue?: number;
}

const props = withDefaults(defineProps<Props>(), { step: 1 });

const model = defineModel<number>({ default: 0 });

provide("number-field", {
  get value() { return model.value; },
  get min() { return props.min; },
  get max() { return props.max; },
  get step() { return props.step; },
  get disabled() { return props.disabled; },
  setValue: (v: number) => { model.value = v; },
  increment: () => {
    const next = (model.value ?? 0) + (props.step ?? 1);
    if (props.max == null || next <= props.max) model.value = next;
  },
  decrement: () => {
    const next = (model.value ?? 0) - (props.step ?? 1);
    if (props.min == null || next >= props.min) model.value = next;
  },
});
</script>

<template>
  <div :class="styles.root">
    <slot />
  </div>
</template>
