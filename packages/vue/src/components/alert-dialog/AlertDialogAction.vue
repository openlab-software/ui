<script setup lang="ts">
import * as buttonStyles from "@openlab-ui/core/button/button.css";

interface Props {
  variant?: "link" | "default" | "outline" | "destructive" | "secondary" | "ghost";
  size?: "default" | "xs" | "sm" | "lg";
}

const props = withDefaults(defineProps<Props>(), { variant: "default", size: "default" });
</script>

<template>
  <button
    type="button"
    data-slot="alert-dialog-action"
    :class="buttonStyles.button({ variant: props.variant, size: props.size })"
  >
    <slot />
  </button>
</template>
