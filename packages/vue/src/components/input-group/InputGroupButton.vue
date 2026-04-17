<script setup lang="ts">
import * as styles from "@openlab-ui/core/button/button.css";

interface Props {
  variant?: "link" | "default" | "outline" | "destructive" | "secondary" | "ghost";
  size?: "default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg";
}

const props = withDefaults(defineProps<Props>(), { variant: "ghost" });
</script>

<template>
  <button :class="styles.button({ variant: props.variant, size: props.size })">
    <slot />
  </button>
</template>
