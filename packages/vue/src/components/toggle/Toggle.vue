<script setup lang="ts">
import * as styles from "@openlab-ui/core/toggle/toggle.css";
import { computed } from "vue";

interface Props {
  variant?: "default" | "outline";
  size?: "default" | "sm" | "lg";
  disabled?: boolean;
  defaultPressed?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  variant: "default",
  size: "default",
});

const model = defineModel<boolean>({ default: false });

const isPressed = computed(() => model.value ?? props.defaultPressed ?? false);
</script>

<template>
  <button
    type="button"
    data-slot="toggle"
    :aria-pressed="isPressed"
    :data-state="isPressed ? 'on' : 'off'"
    :disabled="props.disabled"
    :class="styles.toggle({ variant: props.variant, size: props.size })"
    @click="model = !isPressed"
  >
    <slot />
  </button>
</template>
