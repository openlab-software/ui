<script setup lang="ts">
import * as styles from "@openlab-ui/core/badge/badge.css";

interface Props {
  variant?: "default" | "secondary" | "destructive" | "outline" | "ghost" | "link";
}

const props = withDefaults(defineProps<Props>(), { variant: "default" });
</script>

<template>
  <span data-slot="badge" :class="styles.badge({ variant: props.variant })">
    <slot />
  </span>
</template>
