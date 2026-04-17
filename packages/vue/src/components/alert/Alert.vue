<script setup lang="ts">
import * as styles from "@openlab-ui/core/alert/alert.css";

interface Props {
  variant?: "default" | "destructive";
}

const props = withDefaults(defineProps<Props>(), { variant: "default" });
</script>

<template>
  <div
    data-slot="alert"
    role="alert"
    :class="styles.root({ variant: props.variant })"
  >
    <slot />
  </div>
</template>
