<script setup lang="ts">
import * as styles from "@openlab-ui/core/toggle-group/toggle-group.css";
import { provide } from "vue";

interface Props {
  variant?: "default" | "outline";
  size?: "default" | "sm" | "lg";
  spacing?: number;
  orientation?: "horizontal" | "vertical";
  type?: "single" | "multiple";
  defaultValue?: string | string[];
}

const props = withDefaults(defineProps<Props>(), {
  variant: "default",
  size: "default",
  spacing: 0,
  orientation: "horizontal",
  type: "single",
});

const modelValue = defineModel<string | string[]>();

provide("toggle-group", {
  get variant() { return props.variant; },
  get size() { return props.size; },
  get spacing() { return props.spacing; },
  get type() { return props.type; },
  modelValue,
  toggle: (value: string) => {
    if (props.type === "multiple") {
      const current = (modelValue.value as string[]) ?? [];
      modelValue.value = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];
    } else {
      modelValue.value = modelValue.value === value ? "" : value;
    }
  },
});
</script>

<template>
  <div
    data-slot="toggle-group"
    :data-variant="props.variant"
    :data-size="props.size"
    :data-spacing="props.spacing"
    :data-orientation="props.orientation"
    :class="styles.root"
  >
    <slot />
  </div>
</template>
