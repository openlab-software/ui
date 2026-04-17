<script setup lang="ts">
import * as styles from "@openlab-ui/core/toggle-group/toggle-group.css";
import * as toggleStyles from "@openlab-ui/core/toggle/toggle.css";
import { computed, inject } from "vue";
import type { Ref } from "vue";

interface Props {
  value: string;
  variant?: "default" | "outline";
  size?: "default" | "sm" | "lg";
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  variant: "default",
  size: "default",
});

const ctx = inject<{
  variant: string;
  size: string;
  spacing: number;
  type: string;
  modelValue: Ref<string | string[]>;
  toggle: (value: string) => void;
}>("toggle-group");

const isPressed = computed(() => {
  const val = ctx?.modelValue.value;
  if (Array.isArray(val)) return val.includes(props.value);
  return val === props.value;
});

const variant = computed(() => (ctx?.variant ?? props.variant) as "default" | "outline");
const size = computed(() => (ctx?.size ?? props.size) as "default" | "sm" | "lg");
</script>

<template>
  <button
    type="button"
    data-slot="toggle-group-item"
    :data-variant="variant"
    :data-size="size"
    :data-spacing="ctx?.spacing"
    :aria-pressed="isPressed"
    :data-state="isPressed ? 'on' : 'off'"
    :disabled="props.disabled"
    :class="[toggleStyles.toggle({ variant, size }), styles.item]"
    @click="ctx?.toggle(props.value)"
  >
    <slot />
  </button>
</template>
